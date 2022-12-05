import React from 'react';
import { IGame } from '../../interfaces/Game.interface';

import style from '../../styles/components/_cardsGamesLike.module.scss';

interface Props {
  hasTitle: boolean;
  listGamesLike: IGame[];
}

function CardsGamesLike({ hasTitle, listGamesLike }: Props) {
  return (
    <article>
      <h1 className={ style.title }>Você pode gostar</h1>

      {hasTitle ? (
        <div className={ style.card_container_happy_title }>
          {listGamesLike.map((game) => (
            <a
              key={ game.id }
              href={ game.game_url }
              className={ style.card_content_happy_title }
            >
              <img src={ game.thumbnail } alt={ game.title } />

              <div className={ style.title_content }>
                <h3>{game.title}</h3>
                <span>FREE</span>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className={ style.card_container_not_title }>
          {listGamesLike.map((game) => (
            <a
              key={ game.id }
              href={ game.game_url }
              className={ style.card_content_not_title }
            >
              <img src={ game.thumbnail } alt={ game.title } />
              <span>FREE</span>
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default CardsGamesLike;
