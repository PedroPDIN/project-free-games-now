import React, { useState } from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { platforms, categories } from '../../services/InfoGames';

import style from '../../styles/components/_navigationGames.module.scss';

function NavigationGames() {
  const [boolOpenClosePlatform, setBoolOpenClosePlatform] = useState<boolean>(false);
  const [boolOpenCloseCategory, setBoolOpenCloseCategory] = useState<boolean>(false);

  const onChangePlatform = () => {
    setBoolOpenClosePlatform(!boolOpenClosePlatform);
    setBoolOpenCloseCategory(false);
  };

  const onChangeCategory = () => {
    setBoolOpenCloseCategory(!boolOpenCloseCategory);
    setBoolOpenClosePlatform(false);
  };

  return (
    <nav className={ style.nav_games_container }>
      <div className={ style.nav_platform_content }>
        <div>
          <span>Plataforma: </span>
          <button
            type="button"
            onClick={ onChangePlatform }
          >
            Todas
            {boolOpenClosePlatform ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </button>
        </div>

        <div>
          {boolOpenClosePlatform && (
            <ul>
              <li>Navegue por Plataforma:</li>
              {platforms.map((platform) => (
                <li>{ platform }</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className={ style.nav_category_content }>
        <div>
          <span>Categorias: </span>
          <button
            type="button"
            onClick={ onChangeCategory }
          >
            Todas
            {boolOpenCloseCategory ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </button>
        </div>

        <div>
          {boolOpenCloseCategory && (
            <ul>
              <li>Navegue por Categoria:</li>
              {categories.map((category) => (
                <li>{ category }</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavigationGames;
