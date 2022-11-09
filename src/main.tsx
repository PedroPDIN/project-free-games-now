import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainContextProvider } from './store/Context/Main.Context';
import App from './App';

import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </React.StrictMode>,
);
