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
            <NavItem className="mt-2">
              <Link to="/bill" className="text-white mx-2">Create Bill</Link>
            </NavItem>
            <NavItem className="mt-2">
              <Link to="/signin" className="text-white mx-2">Sign In</Link>
            </NavItem>
            <NavItem className="mt-2">
              <Link to="/login" className="text-white mx-2">Log In</Link>
            </NavItem>
            <NavItem>
              <NavLink 
              href="https://github.com/BrightNankunda/billing-back-end" 
              className="text-white" target="blank">GitHub Billing</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;