import React from "react";
import { Carousel } from "react-bootstrap";
import Quote from "./Quote";

const Container = () => {
  const quotes = [
    "The best ability is availability - someone",
    "A society grows great when old men plant trees whose shade they know they shall never sit in. - Greek Proverb",
    "The truth is an important one; the fact (for it is a fact) is a valuable illustration of it. - William Wordsworth",
    "[H]istory is written by the victors - Missouri Sen. George Graham Vest",
    "Friendships are like flowers. You can plant the seed, but you also got to water it. - Bobby Lee",
    "Not till the sun excludes you do I exclude you - Walt Whitman",
    "A great judge of character is how appropriate their “screw it” moments are.",
    "When u don’t sleep, somebody else gets your dreams.",
    "Everyone’s a piece of turd if you smell hard enough.",
  ];

  return (
    <div
      style={{
        display: "block",
        width: "80vh",
        paddingTop: 100,
        margin: "auto",
      }}
      className="container"
    >
      <Carousel>
        <Carousel.Item interval={7000}>
          <Quote quote={quotes[0]} />
        </Carousel.Item>

        <Carousel.Item interval={7000}>
          <Quote quote={quotes[1]} />
        </Carousel.Item>

        <Carousel.Item interval={7000}>
          <Quote quote={quotes[2]} />
        </Carousel.Item>

        <Carousel.Item interval={7000}>
          <Quote quote={quotes[3]} />
        </Carousel.Item>

        <Carousel.Item interval={7000}>
          <Quote quote={quotes[4]} />
        </Carousel.Item>

        <Carousel.Item interval={7000}>
          <Quote quote={quotes[5]} />
        </Carousel.Item>

        <Carousel.Item interval={7000}>
          <Quote quote={quotes[6]} />
        </Carousel.Item>

        <Carousel.Item interval={7000}>
          <Quote quote={quotes[7]} />
        </Carousel.Item>

        <Carousel.Item interval={7000}>
          <Quote quote={quotes[8]} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Container;
