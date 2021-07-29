import React from 'react'; 
import { Navbar, Row, Col, Nav, Container, Button, Form, NavDropdown, FormControl } from 'react-bootstrap';
import Art from './Art';

const Gallery = (props) => (
      
    <div>
     <Row className ="artCard p-4"> 
        <Col className="artCol" sm={6} md={6} lg={4}>
        <Art />
        </Col>
        <Col className="artCol" sm={6} md={6} lg={4}>
        <Art />
        </Col>
        <Col className="artCol" sm={6} md={6} lg={4}>
        <Art />
        </Col>
    </Row>
    <Row className = "artCard p-4">  
        <Col className="artCol" sm={6} md={6} lg={4}>
        <Art />
        </Col>
        <Col className="artCol" sm={6} md={6} lg={4}>
        <Art />
        </Col>
        <Col className="artCol" sm={6} md={6} lg={4}>
        <Art />
        </Col>
     </Row>
  </div>
);

export default Gallery;