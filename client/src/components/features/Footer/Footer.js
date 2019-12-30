import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  render() {
    return (
        <div className="footer">
            <div className="footer-copyright">
                <p className="copyright">All rights reserved &copy; by Anna Pawlik 2020</p>
            </div>
            <div className="footer-links">
                <Link to='/'>Home</Link>
                <Link to='/FAQ'>FAQ</Link>
                <Link to='/regulamin'>Regulamin</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    );
  }
}

export default NavBar;

