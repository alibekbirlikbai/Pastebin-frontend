import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/pastebin/search">Search</Link>
            </li>

            <li>
                <Link to="/pastebin/create">Create</Link>
            </li>

            <li>
                <Link to="/pastebin/list">All Avilable</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;
