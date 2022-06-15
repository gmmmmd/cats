import React from 'react';
import preloader from './../../../assets/images/preloader.svg';
import './../../../index.css';

const Preloader = (props) => {
  return (
    <div className='Preloader'>
      <img src={preloader} alt="preloader" />
      <span>Загружаю котиков...</span>
    </div>    
  );
};

export default Preloader;