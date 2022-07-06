import React from "react";
import { Carousel } from "react-bootstrap";

type Props = {
  quote: string,
}

const Quote = ({ quote }: Props) => {
  return (
    <>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1516389207633-e5784a9518d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="One"
        style={{ opacity: 0.3, borderRadius: "100px" }}
      />
      <Carousel.Caption
        style={{ 
          textAlign: "center",
          height: "300px",
          fontFamily: "'Merriweather', serif",
          }}>
        <h2>{quote}</h2>
      </Carousel.Caption>
    </>
  );
};

export default Quote;
