import React from 'react';
import { IoMdBrowsers } from 'react-icons/io';
import { DiWindows } from 'react-icons/di';
import { IGame } from '../../interfaces/Game.interface';

import style from '../../styles/components/_cardsGames.module.scss';

interface Props {
  games: IGame[];
  cardFormat: 'mini' | 'base';
}

function CardsGames({ games, cardFormat }: Props) {
  return (
    <article>
      {cardFormat === 'base' ? (
        <h1>Formato base em desenvolvimento....</h1>
      ) : (
        <div className={ style.card_container_mini }>
          {
            games.map((game) => (
              <a
                href={ game.game_url }
                className={ style.card_content_mini }
              >
                <img src={ game.thumbnail } alt={ game.title } />

                <div className={ style.title_content }>
                  <h3>{game.title}</h3>
                  <span>FREE</span>
                </div>

                <p className={ style.description }>{game.short_description}</p>

                <div className={ style.info_game_content }>
                  <span>{game.genre}</span>
                  {game.platform === 'PC (Windows)' ? (
                    <DiWindows className={ style.icon } />
                  ) : (
                    <IoMdBrowsers className={ style.icon } />
                  )}
                </div>
              </a>
            ))
          }
        </div>
      )}
    </article>
  );
}

export default CardsGames;
