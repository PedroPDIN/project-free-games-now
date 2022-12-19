import React, { useContext } from 'react';
import MainContext from '../../store/Context/Main.Context';
import * as Components from '../../components';

import style from '../../styles/pages/_games.module.scss';

function Games() {
  const { listGames } = useContext(MainContext);
  const currentYear: number = new Date().getFullYear();

  return (
    <>
      <Components.Header filterGames={ false } />
      <main className={ style.games_container }>
        <div className={ style.games_titles_content }>
          <h1>{`Principais jogos gratuitos para PC e navegador em ${currentYear}!`}</h1>
          <span>{`${listGames.length} jogos gratuitos encontrados em nossa lista de jogos!`}</span>
        </div>

        <Components.RandomGames limitGame={ 3 } />

        <Components.NavigationGames />

        <hr />

        <Components.Pagination
          limitPage={ 20 }
          currentListGames={ listGames }
          layout="mini"
        />
      </main>

      <Components.Footer />
    </>
  );
}

export default Games;
