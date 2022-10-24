import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';

// import * as api from './services/Api';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
