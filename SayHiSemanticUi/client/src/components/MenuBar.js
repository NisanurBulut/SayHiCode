import React, { useContext, useState } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { AuthContext } from "../context/auth";
function MenuBar() {
  const pathName = window.location.pathname;
  const context = useContext(AuthContext);

  const path = pathName === '/' ? 'home' : pathName.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const MenuBar = context.user ? (
    <Menu size="tiny" pointing inverted className="ui green">
      <Menu.Item name={context.user.username} as={Link} to="/">
      <Image src={context.user.imageUrl} size="mini" />
      </Menu.Item>
      <Menu.Item position="right" name="logout" onClick={context.logout}/>
      </Menu> ):(
          <Menu pointing inverted className="ui green" size="massive">
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={handleItemClick}
            as={Link}
            to="/"
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="login"
              active={activeItem === 'login'}
              onClick={handleItemClick}
              as={Link}
              to="/login"
            />
            <Menu.Item
              name="register"
              active={activeItem === 'register'}
              onClick={handleItemClick}
              as={Link}
              to="/register"
            />
          </Menu.Menu>
        </Menu>
      );
  return MenuBar;
}

export default MenuBar;
