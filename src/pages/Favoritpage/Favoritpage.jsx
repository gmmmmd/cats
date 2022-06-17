import React, { useEffect, useState } from "react";
import CardList from '../../component/CardList/CardList';

const Favoritpage = () => {
  const [cats, setCats] = useState([]);

  const catsFavorites = JSON.parse(localStorage.getItem('favorites-cats'));

  useEffect(() => {
    if (catsFavorites || catsFavorites.length === 0 ) {
      setCats(catsFavorites);
    }
  }, [])

  return (
    <section>
      {catsFavorites && catsFavorites.length !== 0 ?
        <CardList cats={cats} isLoading={true} />
        :
        <p>Добавьте себе котиков...</p>}
    </section>
  );
}


export default Favoritpage;