import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './component/Layout/Layout';
import Homepage from './pages/HomePage/Homepage';
import Favoritpage from './pages/Favoritpage/Favoritpage';
import Notfoundpage from './pages/Notfoundpage/Notfoundpage';

function App() {
  const [cats, setCats] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [checked, setChecked] = useState([false]);

  // Запрос котиков
  useEffect(() => {
    if (fetching) {
      async function fetchData() {
        try {
          const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=20&page=${currentPage}`, {
            headers: {
              'Content-Type': 'app;ication/json',
              'x-api-key': 'e903b6b3-eaca-44ce-829a-f91cff82b3d2',
            }
          });
          if (response.status === 200) {
            const result = await response.json();
            setCats([...cats, ...result]);
            setCurrentPage(prevState => prevState + 1)
            console.log(result)
          }
        }
        catch (error) {
          console.log(error)
        }
        finally {
          setIsLoading(false)
          setFetching(false)
        }
      }
      fetchData()
    }
  }, [fetching, cats, currentPage]);

  // Подгрузка котиков при скролле
  useEffect(() => {
    const scrollHandler = (e) => {
      if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
        setFetching(true);
      }
    }
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [setFetching]);

  useEffect(() => {
    const catsFavorites = JSON.parse(
      localStorage.getItem('favorites-cats')
    );
    if (catsFavorites) {
      setFavorites(catsFavorites);
    }
  }, []);

  // add like
  const addToFavorites = (cats) => {
    if (!checked) {
      const newFavoritesList = [...favorites, cats];
      setFavorites(newFavoritesList);
      saveToLocalStorage(newFavoritesList);
      setChecked(true)
      console.log('checked')
    } else {
      const newFavoritesList = favorites.filter(el => el.id !== cats.id);
      setFavorites(newFavoritesList);
      saveToLocalStorage(newFavoritesList);
      setChecked(false)
      console.log('unchecked')
    }
  }

  const saveToLocalStorage = (items) => {
    localStorage.setItem('favorites-cats', JSON.stringify(items));
  }

  return (
    <>
      <Routes>
        <Route path="/cats/" element={<Layout />}>
          <Route index element={<Homepage
            cats={cats}
            fetching={fetching}
            isLoading={isLoading}
            addToFavorites={addToFavorites}
            checked={checked}
          />} />
          <Route path="/cats/favorit-cats" element={<Favoritpage
            addToFavorites={addToFavorites}
            checked={checked}
          />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;