import React from 'react';
import preloader from './../../../assets/images/preloader.svg';
import styles from './Preloader.module.css';

const Preloader = ({children}) => {
  return (
    <div className={styles.Wrapper}>
      <img src={preloader} alt="preloader" />
      <span>{children}</span>
    </div>    
  );
};

export default Preloader;