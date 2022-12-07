import React from 'react';
import { SiGamejolt } from 'react-icons/si';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import style from '../../styles/components/_footer.module.scss';

function Footer() {
  const year: number = new Date().getFullYear();

  return (
    <footer className={ style.footer_container }>
      <div className={ style.footer_content_info }>
        <div className={ style.links }>
          <a href="https://www.freetogame.com/about">Sobre</a>
          <a href="https://www.freetogame.com/">Site Oficial</a>
          <a href="https://www.freetogame.com/api-doc">API</a>
        </div>

        <div className={ style.icon_container }>
          <SiGamejolt className={ style.icon } />
        </div>
      </div>

      <hr />

      <div className={ style.footer_content_contact }>
        <span className={ style.year }>{`© ${year}`}</span>

        <div className={ style.links }>
          <a href="https://github.com/pedropdin">
            <AiFillGithub />
          </a>

          <a href="https://www.linkedin.com/in/in-pedrolima/">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
