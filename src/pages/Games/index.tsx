import React, { useContext } from 'react';
import MainContext from '../../store/Context/Main.Context';
import * as Components from '../../components';

function Games() {
  const { listGames } = useContext(MainContext);

  return (
    <>
      <Components.Header filterGames={ false } />
      <main>
        <h1>Aqui esta a página de games</h1>

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
