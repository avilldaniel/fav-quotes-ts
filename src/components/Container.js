import React from "react";
import { Carousel } from "react-bootstrap";
import Quote from "./Quote";

const Container = () => {
  return (
    <div
      style={{
        display: "block",
        width: "80vh",
        paddingTop: 100,
        margin: "auto",
      }}
    >
      <Carousel>
        <Carousel.Item interval={10000}>
          <Quote />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Container;
