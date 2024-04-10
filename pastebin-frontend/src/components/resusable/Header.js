import React from 'react';
import { Link } from 'react-router-dom';

import ImportantMessage from './ImportantMessage';

function Header() {
  return (
    <div className='header-block'>
      <ImportantMessage />

      <header>
        <h3>
          <Link to="/pastebin">Pastebin project</Link>

          <sup>
            docs
          </sup>
        </h3>

        <a href="https://alibekbirlikbai.github.io/projects" target='_blank' className='text-underline_hover'>
          all projects
        </a>
      </header>
    </div>
  );
}

export default Header;