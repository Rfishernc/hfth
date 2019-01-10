import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './navbar.scss';

class navbar extends React.Component {
  state = {
    isOpen: false,
  }

  render() {
    const { isAuthenticated, logoutClicked } = this.props;
    const buildNavbar = () => {
      if (isAuthenticated) {
        return (
          <Nav className='ml-auto' navbar>
            <NavItem className='navs'>
              <NavLink tag={RRNavLink} to='/friends'>Friends</NavLink>
              <NavLink tag={RRNavLink} to='/friends/new'>New Friends</NavLink>
              <NavLink tag={RRNavLink} to='/holidays'>Holidays</NavLink>
              <NavLink tag={RRNavLink} to='/holidays/new'>New Holidays</NavLink>
              <NavLink tag={RRNavLink} to='/auth' onClick={logoutClicked}>Logout</NavLink>
            </NavItem>
          </Nav>
        );
      }
      return <Nav className='ml-auto' navbar></Nav>;
    };
    return (
      <div className='myNavBar'>
      <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Home for the Holidays</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {buildNavbar()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default navbar;
