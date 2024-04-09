import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/search">Search</Link>
            </li>

            <li>
                <Link to="/create">Create</Link>
            </li>

            <li>
                <Link to="/list">All Avilable</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;
