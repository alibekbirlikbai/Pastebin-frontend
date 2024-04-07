import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h3>
        <Link to="/">Pastebin project</Link>
      </h3>

      <a href="https://alibekbirlikbai.github.io/projects" target='_blank'>other projects</a>
    </header>
  );
}

export default Header;