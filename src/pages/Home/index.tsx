import React, { useContext } from 'react';
import MainContext from '../../store/Context/Main.Context';
import * as Components from '../../components';

function Home() {
  const { listGames } = useContext(MainContext);

  return (
    <main>
      <Components.Header filterGames />

      <div>
        <h1>
          Encontre e acompanhe os melhores jogos
          <span> grátis para jogar!</span>
        </h1>
      </div>

      <div>
        <Components.CardsGames listGames={ listGames.slice(0, 10) } cardFormat="base" />
        <Components.CardsGamesLike hasTitle={ false } />
      </div>
    </main>
  );
}

export default Home;
