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
        <a href="#">
          <ReindeerIcon />
        </a>
      </h1>
      <ul className="main-nav">
        <li>
          <NavLink to="/home" style={({ isActive }) => ({
            color: isActive ? 'greenyellow' : 'white'
          })}>
            Home
          </NavLink>
          {/* <a href="#">Home</a> */}
        </li>
        <li><a href="#">Reminders</a></li>
        <li><a href="#">User</a></li>
      </ul>
    </header>

  )
}

export default Header;