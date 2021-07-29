import React from 'react';
import { Card, Button } from 'react-bootstrap';
import placeholder from '../img/image1.jpeg'; 

const Art = (props) => (
    <div>
       <Card style={{ width: 'fluid'}}>
  <Card.Img variant="top" src={placeholder} />
  <Card.Body>
    <Card.Title>Artwork Title:</Card.Title>
    <Card.Title>Artist Name:</Card.Title>
    <Card.Text>
      Artwork Descrption.
    </Card.Text>
    <Button variant="primary">Go to Artwork Page</Button>
  </Card.Body>
</Card>
  </div>
);

export default Art;