import React, { useContext, useState, useEffect } from 'react';
import { HiSearchCircle } from 'react-icons/hi';
import MainContext from '../../store/Context/Main.Context';
import * as Components from '../../components';
import { IGame } from '../../interfaces/Game.interface';

import style from '../../styles/components/_search.module.scss';

function Search() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchGame, setSearchGame] = useState<IGame[] | []>([]);

  const { listGames } = useContext(MainContext);

  const handleChangeGame = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      if (searchInput.length === 0) {
        setSearchGame([]);
      } else {
        const getGame = listGames
          .filter((game) => game.title.toLowerCase()
            .startsWith(searchInput!.toLowerCase()));

        setSearchGame(getGame);
      }
    }, 900);
  }, [searchInput]);

  return (
    <>
      <Components.Header filterGames />
      <main className={ style.search_container }>

        <section className={ style.filter_container }>
          <div className={ style.filter_content }>
            <HiSearchCircle className={ style.icon } />
            <h1 className={ style.title }>Encontrar Jogo</h1>
          </div>

          <hr />

          <div className={ style.input_filter }>
            <input
              placeholder="Digite aqui!"
              type="text"
              value={ searchInput }
              onChange={ handleChangeGame }
            />
          </div>

        </section>
        {searchGame.map((game) => (
          <div key={ game.id }>{ game.title }</div>
        ))}
        <section />
      </main>
    </>

  );
}

export default Search;
