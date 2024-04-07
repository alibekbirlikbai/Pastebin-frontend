import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/search">Search Bin</Link>
            </li>

            <li>
                <Link to="/create">Create Bin</Link>
            </li>

            <li>
                <Link to="/list">All Avilable Bins</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;
