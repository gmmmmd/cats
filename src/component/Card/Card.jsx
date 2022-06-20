import React from 'react';
import styles from './Card.module.css'; 

const Card = ({ cats, addToFavorites,checked }) => {
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

export default Card;