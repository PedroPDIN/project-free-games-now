import React, { useState } from 'react';
import { IGame } from '../../interfaces/Game.interface';
import CardsGames from '../CardsGames';

interface Props {
  limitPage: number;
  currentListGames: IGame[];
  layout: 'base' | 'mini';
}

function Pagination({ limitPage, currentListGames, layout }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const pages: number = Math.ceil(currentListGames.length / limitPage);
  const startIndex: number = currentPage * limitPage;
  const endIndex: number = startIndex + limitPage;
  const currentList: IGame[] = currentListGames.slice(startIndex, endIndex);

  return (
    <div>
      <CardsGames cardFormat={ layout } listGames={ currentList } />

      <div>
        <button
          type="button"
          onClick={ () => setCurrentPage(currentPage - 1) }
        >
          Anterior
        </button>

        <span>
          <span>{currentPage + 1}</span>
          {` de ${pages}`}
        </span>

        <button
          type="button"
          onClick={ () => setCurrentPage(currentPage + 1) }
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

export default Pagination;
