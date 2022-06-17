import React, { useEffect, useState } from "react";
import CardList from '../../component/CardList/CardList';

const Favoritpage = ({ removeToFavorites }) => {
  const [cats, setCats] = useState([]);

  const catsFavorites = JSON.parse(localStorage.getItem('favorites-cats'));

  useEffect(() => {
    if (catsFavorites) {
      setCats(catsFavorites);
    }
  }, [removeToFavorites])

  return (
    <section>
      {catsFavorites ?
        <CardList cats={cats} isLoading={true} removeToFavorites={removeToFavorites} />
        :
        <p>Добавьте себе котиков...</p>}
    </section>
  );
}

export default Favoritpage;