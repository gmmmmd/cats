import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './component/Layout/Layout';
import Homepage from './pages/HomePage/Homepage';
import Favoritpage from './pages/Favoritpage';
import Notfoundpage from './pages/Notfoundpage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/favorit-cats" element={<Favoritpage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
