import React from 'react';
import { Carousel } from 'react-bootstrap';
import ExampleImageTrhee from './518.jpg';


function ImaCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleImageTrhee}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImaCarousel;