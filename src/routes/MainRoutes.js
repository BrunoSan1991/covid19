import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Cartoes from '../pages/Cartoes';
import NotFoundPage from '../pages/NotFoundPage';

function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Cartoes" element={<Cartoes />} />
        <Route path = "*" element={<NotFoundPage />} />
    </Routes>
   
  );
}

export default MainRoutes;
