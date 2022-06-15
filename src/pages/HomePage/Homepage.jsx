import React, { useState, useEffect } from 'react';
import styles from './Homepage.module.css';
import Preloader from '../../component/common/Preloader/Preloader';


const Homepage = () => {
  const [cats, setCats] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

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
  }, [fetching])

  // Подгрузка котиков при скролле
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
  }

  const allCats = cats.map((cats) => {
    return (
    <div key={cats.id} className="CatsBox">
      <img src={cats.url} alt="cats" className="ImgCat" />
      <div>
        <button type='button'>
          <span>Add to Favourites</span>
          <svg
            width='1em'
            height='1em'
            viewBox='0 0 16 16'
            class='bi bi-heart-fill'
            fill='red'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
            />
          </svg>
        </button>
      </div>
    </div>  
    );
  });
  return (
    <>
      {isLoading ? <Preloader /> :
        <section className={styles.Container}>
          <div className={styles.CatsBlock}>
            {allCats}
          </div>
          {!isLoading && <Preloader />}
        </section>
      }
    </>
  );
}

export default Homepage;