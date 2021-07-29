import React from 'react'; 
import {  Row, Col,  } from 'react-bootstrap';
import ArtistCard from './ArtistCard'
import placeholder from '../img/image0.jpeg'


const Artists = (props) => (


    
      
    <div>
      <Col  md >
       <h1><img src={placeholder} class="rounded mx-auto d-block" /></h1>
        <h1 class = "headerTitle" >
            Artists
        </h1>
      </Col>
     <Row className ="artCard p-4"> 
        <Col className="artCol" sm={6} md={6} lg={4}>
        <ArtistCard />
        </Col>
        <Col className="artCol" sm={6} md={6} lg={4}>
        <ArtistCard/>
        </Col>
        <Col className="artCol" sm={6} md={6} lg={4}>
        <ArtistCard />
        </Col>
    </Row>
    <Row className = "artCard p-4">  
        <Col className="artCol" sm={6} md={6} lg={4}>
        <ArtistCard />
        </Col>
        <Col className="artCol" sm={6} md={6} lg={4}>
        <ArtistCard />
        </Col>
        <Col className="artCol" sm={6} md={6} lg={4}>
        <ArtistCard/>
        </Col>
    </Row>
  </div>
);

export default Artists;