import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'Link Link-active' : 'Link'

const Layout = () => {
  return (
    <>
      <header className="container">
        <NavLink to="/" className={setActive}>All Cats</NavLink>
        <NavLink to="/favorit-cats" className={setActive}>Favorit Cats</NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;