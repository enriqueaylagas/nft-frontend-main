import React ,{Fragment} from 'react';
import { Navbar, Nav, Container, Button, Form, NavDropdown, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/auth';

const Navigation = ({logout, isAuthenticated}) => {

  const guestLinks = () =>(
    <Fragment>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/signup">Sign up</Nav.Link>
    </Fragment>


  );

  const authLinks = () =>(
    <Fragment>
      <Link className='navbar-brand' to="/market">Nfties</Link>
      <Link className='nav-link' to="/artists">Artists</Link>
      <Link className='nav-link' to="/about">About</Link>
      <Link className='nav-link' to="/checkout">Check Out</Link>
      <a className='nav-link' href="/#!" onClick={logout}>Logout</a>
      
     </Fragment>
  );

  



  return(
      <div>
        <Navbar bg="transparent" expand="lg">
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            
            
            {isAuthenticated ? authLinks(): guestLinks()}
            
            
          
          </Nav>
          
          
        </Navbar.Collapse>
        
      </Navbar>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{logout})(Navigation);