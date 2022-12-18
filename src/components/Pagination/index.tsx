import React, { useState } from 'react';
import { IGame } from '../../interfaces/Game.interface';
import CardsGames from '../CardsGames';

import style from '../../styles/components/_pagination.module.scss';

interface Props {
  limitPage: number;
  currentListGames: IGame[];
  layout: 'base' | 'mini';
}

function Pagination({ limitPage, currentListGames, layout }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const pages: number = Math.ceil(currentListGames.length / limitPage);
  const startIndex: number = currentPage * limitPage < 0 ? 0 : currentPage * limitPage;
  const endIndex: number = startIndex + limitPage;
  const currentList: IGame[] = currentListGames.slice(startIndex, endIndex);

  return (
    <div className={ style.pagination_container }>
      <div className={ style.cpn_games }>
        <CardsGames cardFormat={ layout } listGames={ currentList } />
      </div>

      <div className={ style.pagination_content_nav }>
        {currentPage > 0 && (
          <button
            type="button"
            onClick={ () => setCurrentPage(currentPage - 1) }
          >
            Anterior
          </button>
        )}

        <span className={ style.current_page }>
          <span>{currentPage + 1}</span>
          {` de ${pages}`}
        </span>

        {currentPage + 1 < pages && (
          <button
            type="button"
            onClick={ () => setCurrentPage(currentPage + 1) }
          >
            Próximo
          </button>
        ) }

      </div>
    </div>
  );
}

export default Pagination;
