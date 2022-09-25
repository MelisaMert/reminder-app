/** Dependencies */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

/* Components **/
import ReindeerIcon from '../../../assets/images/Reindeer';

/** Styles */
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/home">
          <ReindeerIcon />
        </Link>
      </h1>
      <ul className="main-nav">
        <li>
          <Link to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/reminders">
            Reminders
          </Link>
        </li>
        <li>
          <Link to="/profile">
            Profile
          </Link>
        </li>
      </ul>
    </header>

  )
}

export default Header;