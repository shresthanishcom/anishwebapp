import React from "react";
import { Carousel } from "react-bootstrap";
import "../Css/Carousel.css";

import { useState } from "react";

const ControlledCarousel = () => {
  var data = [
    {
      picName: "anishPcs.jpg",
      title: "hi its me anish",
      description: "I love exercise and learning is my habit.",
    },
    {
      picName: "anishBike.jpg",
      title: "Ride till you die",
      description: "Night ride hits different.",
    },
    {
      picName: "nightView.jpg",
      title: "Moon and clouds",
      description: "On the roof looking at the moon.",
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <React.Fragment>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={`./images/${data[0].picName}`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{data[0].title}</h3>
            <p>{data[0].description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={`./images/${data[1].picName}`}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>{data[1].title}</h3>
            <p>{data[1].description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={`./images/${data[2].picName}`}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{data[2].title}</h3>
            <p>{data[2].description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
};

export default ControlledCarousel;
