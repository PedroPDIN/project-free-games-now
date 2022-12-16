import React, { useContext } from 'react';
import MainContext from '../../store/Context/Main.Context';

import style from '../../styles/components/_randomGames.module.scss';

interface Props {
  limitGame: number;
}

function RandomGames({ limitGame }: Props) {
  const { gamesLike } = useContext(MainContext);

  return (
    <article className={ style.random_games_container }>
      {gamesLike.slice(0, limitGame).map((game) => (
        <a
          key={ game.id }
          href={ game.game_url }
          className={ style.random_games_body_content }
        >
          <img src={ game.thumbnail } alt={ game.title } />
          <span>FREE</span>
        </a>
      ))}
    </article>
  );
}

export default RandomGames;
