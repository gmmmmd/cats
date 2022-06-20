import React from 'react';
import styles from './CardList.module.css';
import Card from './../Card/Card';

const CardList = ({ cats, addToFavorites, checked }) => {

  const allCats = cats.map((i) => {
    return (
      <Card cats={i} key={i.id} addToFavorites={addToFavorites} checked={checked} />
    );
  })

  return (
    <div className={styles.Container}>
      {allCats}
    </div>

  );
}

export default CardList;