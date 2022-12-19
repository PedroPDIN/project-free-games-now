import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { SiGamejolt } from 'react-icons/si';
import MainContext from '../../store/Context/Main.Context';
import { categories, platforms } from '../../services/InfoGames';

import style from '../../styles/components/_header.module.scss';

interface Props {
  filterGames: boolean;
}

function Header({ filterGames }: Props) {
  const {
    currentCategory,
    setCurrentCategory,
    currentPlatform,
    setCurrentPlatform,
  } = useContext(MainContext);

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
              <select
                value={ currentCategory }
                onChange={ (e) => setCurrentCategory(e.target.value) }
              >
                <option selected>Categorias</option>
                {tenCategories.map((category, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <option key={ index } value={ category }>{category}</option>
                ))}
              </select>

              <select
                value={ currentPlatform }
                onChange={ (e) => setCurrentPlatform(e.target.value) }
              >
                <option disabled selected>Plataforma</option>
                {platforms.map((platform, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <option key={ index } value={ platform }>{ platform }</option>
                ))}
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
