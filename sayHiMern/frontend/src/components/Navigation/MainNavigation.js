import React from 'react';
import {NavLink} from 'react-router-dom';
import * as classes from './MainNavigation.module.css';

const MainNavigation = (props) => {
  return (
    <header className={classes.mainNavigation}>
      <div className={classes.mainNavigationLogo}>
        <h1>Easy Event</h1>
      </div>
      <nav className={classes.mainNavigationItems}>
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
