import React, { useState }from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/Logo';
import './NavBar.scss';

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <div className="navbar-desktop text-uppercase">
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
      <div className="navbar-mobile">
        <Navbar color="faded" light>
          <Logo />
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to='/'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/FAQ'>FAQ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/termsconditions'>Terms & Conditions</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/contact'>Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/basket'>
                  <FontAwesomeIcon icon={faShoppingBag} />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;