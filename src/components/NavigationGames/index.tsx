import React, { useState } from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { platforms, categories } from '../../services/InfoGames';

function NavigationGames() {
  const [boolOpenClosePlatform, setBoolOpenClosePlatform] = useState<boolean>(false);
  const [boolOpenCloseCategory, setBoolOpenCloseCategory] = useState<boolean>(false);

  return (
    <nav>
      <div>
        <div>
          <span>Plataforma</span>
          <button
            type="button"
            onClick={ () => setBoolOpenClosePlatform(!boolOpenClosePlatform) }
          >
            Todas as Plataformas
            {boolOpenClosePlatform ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </button>
        </div>

        <div>
          {boolOpenClosePlatform && (
            <ul>
              {platforms.map((platform) => (
                <li>{ platform }</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div>
        <div>
          <span>Categorias</span>
          <button
            type="button"
            onClick={ () => setBoolOpenCloseCategory(!boolOpenCloseCategory) }
          >
            Todas as Categorias
            {boolOpenCloseCategory ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </button>
        </div>

        <div>
          {boolOpenCloseCategory && (
            <ul>
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
