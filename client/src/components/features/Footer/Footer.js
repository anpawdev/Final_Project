import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

class NavBar extends React.Component {

  render() {
    return (
        <div className="footer col-sm-12">
            <div className="footer-copyright">
                <p className="copyright">All rights reserved &copy; by Anna Pawlik 2020</p>
            </div>
            <div className="footer-links">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/FAQ'>FAQ</NavLink>
                <NavLink to='/termsconditions'>Terms</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
        </div>
    );
  }
}

export default NavBar;

