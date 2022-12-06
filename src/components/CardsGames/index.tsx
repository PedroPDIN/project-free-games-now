import React from 'react';
import { IoMdBrowsers } from 'react-icons/io';
import { DiWindows } from 'react-icons/di';
import { IGame } from '../../interfaces/Game.interface';

import style from '../../styles/components/_cardsGames.module.scss';

interface Props {
  listGames: IGame[];
  cardFormat: 'mini' | 'base';
}

function CardsGames({ listGames, cardFormat }: Props) {
  return (
    <article>
      {cardFormat === 'base' ? (
        <div className={ style.card_container_base }>
          {
            listGames.map((game) => (
              <a
                href={ game.game_url }
                className={ `card-body ${style.card_content_base}` }
              >
                <div className={ style.thumbnail_game }>
                  <img src={ game.thumbnail } alt={ game.title } />
                </div>

                <div className={ style.info_game_content }>
                  <h1 className={ style.title_game }>{game.title}</h1>
                  <p className={ style.description_game }>{game.short_description}</p>
                  <span>{ game.genre }</span>
                </div>

                <div className={ style.data_status_game }>
                  {game.platform === 'PC (Windows)' ? (
                    <DiWindows className={ style.icon_platform } />
                  ) : (
                    <IoMdBrowsers className={ style.icon_platform } />
                  )}
                  <span>FREE</span>
                </div>
              </a>
            ))
          }
        </div>
      ) : (
        <div className={ style.card_container_mini }>
          {
            listGames.map((game) => (
              <a
                href={ game.game_url }
                className={ `card-body ${style.card_content_mini}` }
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
