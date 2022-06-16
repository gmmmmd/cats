import React from 'react';
import styles from './CardList.module.css';
import Preloader from '../common/Preloader/Preloader';

const CardList = ({cats, isLoading, addToFavorites}) => {

  const Card = ({ cats, addToFavorites }) => {
    return (
      <div className={styles.Wrapper}>
        <img className={styles.Img} key={cats.key} src={cats.url} alt="cats" />
        <div>
          <button onClick={() => addToFavorites(cats)}>add</button>
        </div>
      </div>
    );
  }

  const allCats = cats.map((i) => {
    return (
      <Card cats={i} key={i.id} addToFavorites={addToFavorites} />
    );
  })

  return (
    <div className={styles.Container}>
      {allCats}
      {/* {!isLoading && <Preloader>Загружаю еще больше котиков...</Preloader>} */}
    </div>

  );
}

export default CardList;
