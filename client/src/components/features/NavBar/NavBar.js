import React from 'react';
import { NavLink } from 'reactstrap';
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
          <NavLink href='/'>Home</NavLink>
          <NavLink href='/FAQ'>FAQ</NavLink>
          <NavLink href='/termsconditions'>Terms & Conditions</NavLink>
          <NavLink href='/contact'>Contact</NavLink>
          <NavLink href='/basket'>
            <FontAwesomeIcon icon={faShoppingBag} />
          </NavLink>
        </div>
      </div>
    );
  }

}

export default NavBar;