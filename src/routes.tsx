import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import * as Pages from './pages';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate replace to="/home" /> } />
      <Route path="/home" element={ <Pages.Home /> } />
      <Route path="/search" element={ <Pages.Search /> } />
    </Routes>
  );
}

export default MainRoutes;
