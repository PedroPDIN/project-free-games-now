import React from 'react';
import { HiSearchCircle } from 'react-icons/hi';
import * as Components from '../../components';

import style from '../../styles/components/_search.module.scss';

function Search() {
  return (
    <main className={ style.search_container }>
      <Components.Header filterGames />

      <section className={ style.filter_container }>
        <div className={ style.filter_content }>
          <HiSearchCircle className={ style.icon } />
          <h1 className={ style.title }>Encontrar Jogo</h1>
        </div>

        <hr />

        <div className={ style.input_filter }>
          <input
            type="text"
            placeholder="Digite aqui!"
          />
        </div>
      </section>
    </main>
  );
}

export default Search;
