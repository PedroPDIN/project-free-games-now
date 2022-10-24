import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/search" element={ <Pages.Search /> } />
    </Routes>
  );
}

export default MainRoutes;
