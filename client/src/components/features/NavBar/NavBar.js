import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/Logo';
import './NavBar.scss';

class NavBar extends React.Component {

  render() {
    return (
      <div className="navbar text-uppercase">
        <Logo />
        <div className="navbar navbar-links">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/FAQ'>FAQ</NavLink>
          <NavLink to='/termsconditions'>Terms & Conditions</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/basket'>
            <FontAwesomeIcon icon={faShoppingBag} />
          </NavLink>
        </div>
      </div>
    );
  }

}

export default NavBar;