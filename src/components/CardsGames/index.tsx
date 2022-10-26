import React from 'react';
import { IoMdBrowsers } from 'react-icons/io';
import { DiWindows } from 'react-icons/di';
import { IGame } from '../../interfaces/Game.interface';

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
        <div>
          {
            games.map((game) => (
              <div>
                <img src={ game.thumbnail } alt={ game.title } />

                <div>
                  <h3>{game.title}</h3>
                  <span>FREE</span>
                </div>

                <p>{game.short_description}</p>

                <div>
                  {game.genre}
                  {game.platform === 'PC (Windows)' ? (
                    <DiWindows />
                  ) : (
                    <IoMdBrowsers />
                  )}
                </div>
              </div>
            ))
          }
        </div>
      )}
    </article>
  );
}

export default CardsGames;
