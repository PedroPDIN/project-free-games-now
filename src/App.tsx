import React from 'react';
import * as api from './services/Api';

function App() {
  console.log(api.getGamesId('452'));
  return (
    <div className="App">
      <h1>Hello word</h1>
    </div>
  );
}

export default App;
