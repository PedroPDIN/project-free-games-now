import React, { useContext } from 'react';
import MainContext from '../../store/Context/Main.Context';
import * as Components from '../../components';

import style from '../../styles/pages/_home.module.scss';

function Home() {
  const { listGames } = useContext(MainContext);

  return (
    <main className={ style.home_container }>
      <Components.Header filterGames />

      <div className={ style.home_content_banner }>
        <h1>
          Encontre e acompanhe os melhores jogos
          <span> grátis para jogar!</span>
        </h1>
      </div>

      <h1 className={ style.title }>Adicionado Recentemente</h1>

      <div className={ style.data_game_content }>
        <div className={ style.home_content_cards_game }>
          <Components.CardsGames listGames={ listGames.slice(0, 10) } cardFormat="base" />

          <div className={ style.btn_more_games }>
            <button type="button">
              Mais Jogos
            </button>
          </div>
        </div>

        <div className={ style.home_content_cards_like }>
          <Components.CardsGamesLike hasTitle={ false } />
        </div>
      </div>
    </main>
  );
}

export default Home;
