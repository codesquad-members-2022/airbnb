import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Hero } from 'components/Hero';
import { Home } from 'pages/Home';
import { Rooms } from 'pages/Rooms';

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Hero />}>
        <Route index element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
      </Route>
    </Routes>
  );
}

export default App;
