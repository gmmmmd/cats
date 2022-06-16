import React from 'react';
import CardList from './../../component/CardList/CardList';
import Preloader from './../../component/common/Preloader/Preloader';

const Homepage = ({ cats, isLoading, addToFavorites, click }) => {
  return (
    <>
      {isLoading ?
        <Preloader>Загружаю котиков...</Preloader>
        :
        <section>
          <CardList
            cats={cats}
            addToFavorites={addToFavorites}
          />
          {!isLoading && <Preloader>Загружаю еще больше котиков...</Preloader>}
        </section>
      }
    </>
  );
}

export default Homepage;