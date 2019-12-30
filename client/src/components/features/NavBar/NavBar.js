import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to='/'>Home</Link>
          <Link to='/FAQ'>FAQ</Link>
          <Link to='/regulamin'>Regulamin</Link>
          <Link to='/contact'>Kontakt</Link>
          <Link to='/bag'>
            <FontAwesomeIcon icon={faShoppingBag} />
          </Link>
        </div>
      </div>
    );
  }

}

export default NavBar;