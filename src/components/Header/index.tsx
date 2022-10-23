import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { SiGamejolt } from 'react-icons/si';
import categories from '../../services/GameCategories';

import style from '../../styles/components/_header.module.scss';

interface Props {
  filterGames: boolean;
}

function Header({ filterGames }: Props) {
  const tenCategories: string[] = categories.slice(0, 10);

  return (
    <header className={ style.header_container }>
      {
        filterGames ? (
          <div className={ style.header_content_layout_filter }>

            <div className={ style.title_container }>
              <SiGamejolt className={ style.icon } />
              <h1 className={ style.title }>
                Free Game Now
              </h1>
            </div>

            <div className={ style.selects_container }>
              <select>
                <option disabled selected>Selecione</option>
                {tenCategories.map((category, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <option key={ index } value={ category }>{category}</option>
                ))}
              </select>

              <select>
                <option disabled selected>Plataforma</option>
                <option value="pc">PC</option>
                <option value="browser">Browser</option>
              </select>
            </div>

            <button type="button">
              <FiSearch />
            </button>
          </div>
        ) : (
          <div className={ style.header_content }>

            <div className={ style.title_container }>
              <SiGamejolt className={ style.icon } />
              <h1 className={ style.title }>
                Free Game Now
              </h1>
            </div>

            <button type="button">
              <FiSearch />
            </button>
          </div>
        )
      }

    </header>
  );
}

export default Header;
