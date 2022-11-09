import React, { useContext } from 'react';
import MainContext from '../../store/Context/Main.Context';

import style from '../../styles/components/_cardsGamesLike.module.scss';

interface Props {
  hasTitle: boolean;
}

function CardsGamesLike({ hasTitle }: Props) {
  const { gamesLike } = useContext(MainContext);

  return (
    <article>
      <h1 className={ style.title }>Você pode gostar</h1>

      {hasTitle ? (
        <div className={ style.card_container_happy_title }>
          {gamesLike.map((game) => (
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
        <div>
          <h1>Em breve os cards sem o title</h1>
        </div>
      )}
    </article>
  );
}

export default CardsGamesLike;
