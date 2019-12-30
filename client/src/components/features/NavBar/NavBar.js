import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/FAQ'>FAQ</Link>
        <Link to='/regulamin'>Regulamin</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/bag'>Bag Page</Link>
      </div>
    );
  }

}

export default NavBar;