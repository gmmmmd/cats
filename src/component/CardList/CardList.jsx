import React, { useState } from 'react';
import styles from './CardList.module.css';
import Preloader from '../common/Preloader/Preloader';

const CardList = ({cats, addToFavorites, removeToFavorites}) => {

  const Card = ({ cats, addToFavorites, removeToFavorites }) => {
    return (
      <div className={styles.Wrapper}>
        <img className={styles.Img} key={cats.key} src={cats.url} alt="cats" />
        <div className={styles.ButtonBox}>
          { addToFavorites ? <button onClick={() => addToFavorites(cats)}>add</button> : null }
          { removeToFavorites ? <button onClick={() => removeToFavorites(cats)}>del</button> : null }
        </div>
      </div>
    );
  }

  const allCats = cats.map((i) => {
    return (
      <Card cats={i} key={i.id} addToFavorites={addToFavorites} removeToFavorites={removeToFavorites} />
    );
  })

  return (
    <div className={styles.Container}>
      {allCats}
    </div>

  );
}

export default CardList;
