import React from 'react';
import { NavLink } from 'reactstrap';
import './Footer.scss';

class NavBar extends React.Component {

  render() {
    return (
        <div className="footer">
            <div className="footer-copyright">
                <p className="copyright">All rights reserved &copy; by Anna Pawlik 2020</p>
            </div>
            <div className="footer-links">
                <NavLink href='/'>Home</NavLink>
                <NavLink href='/FAQ'>FAQ</NavLink>
                <NavLink href='/termsconditions'>Terms</NavLink>
                <NavLink href='/contact'>Contact</NavLink>
            </div>
        </div>
    );
  }
}

export default NavBar;

