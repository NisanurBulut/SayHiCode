import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainNavigation.css';
import AuthContext from '../../context/auth-context';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
const MainNavigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        return (
          <header className="mainNavigation">
            <div className="mainNavigationLogo">
             <EmojiEventsOutlinedIcon /> Smart Event
            </div>
            <nav className="mainNavigationItems">
              <ul>
                {!context.token && (
                  <li>
                    <NavLink to="/auth">Authenticate</NavLink>
                  </li>
                )}
                {context.token && (
                 <React.Fragment>
                    <li>
                    <NavLink to="/events">Events</NavLink>
                  </li>
                  <li>
                  <NavLink to="/bookings">Bookings</NavLink>
                </li>
                <li>
                  <a href="" onClick={context.logout}>Logout</a>
                </li>
                 </React.Fragment>
                )}
              </ul>
            </nav>
          </header>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default MainNavigation;
