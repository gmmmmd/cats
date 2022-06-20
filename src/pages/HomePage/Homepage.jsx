import React, { useState,useEffect } from 'react';
import CardList from './../../component/CardList/CardList';
import Preloader from './../../component/common/Preloader/Preloader';

const Homepage = ({ cats, isLoading, addToFavorites, checked }) => {
  return (
    <>
      {isLoading ?
        <Preloader>Загружаю котиков...</Preloader>
        :
        <section>
          <CardList
            cats={cats}
            addToFavorites={addToFavorites}
            checked={checked}
          />
          {!isLoading && <Preloader>Загружаю еще больше котиков...</Preloader>}
        </section>
      }
    </>
  );
}

export default Homepage;