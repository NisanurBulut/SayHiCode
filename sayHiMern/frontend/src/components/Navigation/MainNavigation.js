import React from 'react';
import {NavLink} from 'react-router-dom';
import './MainNavigation.css';

const MainNavigation = (props) => {
  return (
    <header className="mainNavigation">
      <div className="mainNavigationLogo">
        <h1>Easy Event</h1>
      </div>
      <nav className="mainNavigationItems">
          <ul>
          <li>
            <NavLink to="/auth">Authenticate</NavLink>
            </li>
            <li>
            <NavLink to="/events">Events</NavLink>
            </li>
            <li>
            <NavLink to="/bookings">Bookings</NavLink>
            </li>
          </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
