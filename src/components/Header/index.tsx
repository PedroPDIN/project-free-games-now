import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import { FiSearch } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import { SiGamejolt } from 'react-icons/si';
import categories from '../../services/GameCategories';

import style from '../../styles/components/_header.module.scss';

interface Props {
  filterGames: boolean;
}

function Header({ filterGames }: Props) {
  const tenCategories: string[] = categories.slice(0, 10);
  const navigate = useNavigate();

  return (
    <header className={ style.header_container }>
      {
        filterGames ? (
          <div className={ style.header_content_layout_filter }>

            <Link to="/home" className={ style.title_container }>
              <SiGamejolt className={ style.icon } />
              <h1 className={ style.title }>
                Free Game Now
              </h1>
            </Link>

            <div className={ style.selects_container }>
              <select>
                <option disabled selected>Categorias</option>
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

            <button
              type="button"
              onClick={ () => navigate('/search') }
            >
              <FaSearch
                className={ style.icon_search }
              />

              <span>Procurar Game</span>
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

            <button
              type="button"
              onClick={ () => navigate('/search') }
            >
              <FaSearch
                className={ style.icon_search }
              />

              <span>Procurar Game</span>
            </button>
          </div>
        )
      }

    </header>
  );
}

export default Header;
