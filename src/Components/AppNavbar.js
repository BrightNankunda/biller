import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

const AppNavbar = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary"  expand="md">
        <NavbarBrand to="/" exact={true} activeClassName="active" 
        className="text-white mx-2">
        Law Biller
          {/* <Link to="/" className="text-white mx-2">Law Biller</Link> */}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink activeClassName="active" to="/bill" 
              className="text-white mx-2">Create Bill</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" to="/signin" className="text-white mx-2">Sign In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" to="/login" className="text-white mx-2">Log In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
              to="https://github.com/BrightNankunda/billing-back-end" 
              className="text-white" target="blank">GitHub Billing</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;