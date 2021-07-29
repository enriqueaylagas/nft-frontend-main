import React from 'react'; 
import { Navbar, Row, Col, Nav, Container, Button, Form, NavDropdown, FormControl } from 'react-bootstrap';
import placeholder from '../img/image0.jpeg'
const Header = (props) => (
      
    <div>
      <Col  md >
        <h1><img src={placeholder} class="rounded mx-auto d-block" /></h1>
        <h1 class = "headerTitle" >
             MARKET
             </h1>
             </Col>

  </div>
);

export default Header;