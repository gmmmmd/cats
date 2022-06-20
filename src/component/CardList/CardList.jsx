import React, { useState, useEffect } from 'react';
import styles from './CardList.module.css';

const CardList = ({ cats }) => {


  // useEffect(() => {
  //   const catsFavorites = JSON.parse(
  //     localStorage.getItem('favorites-cats')
  //   );
  //   if (catsFavorites) {
  //     setFavorites(catsFavorites);
  //   }
  // }, []);


  const Card = ({ cats }) => {
    const [checked, setChecked] = useState(false);
    const [favorites, setFavorites] = useState([]);

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
      <div className={styles.Wrapper}>
        <img className={styles.Img} key={cats.key} src={cats.url} alt="cats" />
        <div className={styles.ButtonBox}>
          <button
            className={`${styles.Button} ${(checked ? `${styles.add}` : '')}`}
            onClick={() => addToFavorites(cats)}
          >
            ❤
          </button>
        </div>
      </div>
    );
  }

  const allCats = cats.map((i) => {
    return (
      <Card cats={i} key={i.id} />
    );
  })

  return (
    <div className={styles.Container}>
      {allCats}
    </div>

  );
}

export default CardList;
