import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const AppNavbar = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary"  expand="md">
        <NavbarBrand >
          <Link to="/" className="text-white mx-2">Law Biller</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/bill" className="text-white mx-2">Create Bill</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/signin" className="text-white mx-2">Sign In</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/login" className="text-white mx-2">Log In</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
              href="https://github.com/BrightNankunda/billing-back-end" 
              className="text-white">GitHub Billing</NavLink>
            
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;