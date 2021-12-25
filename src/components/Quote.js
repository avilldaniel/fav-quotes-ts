import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

const Quote = () => {
  const quotes = [
    "The best ability is availability - someone",
    "[H]istory is written by the victors - Missouri Sen. George Graham Vest",
    "The truth is an important one; the fact (for it is a fact) is a valuable illustration of it. - William Wordsworth",
    "Not till the sun excludes you do I exclude you - Walt Whitman",
    "A society grows great when old men plant trees whose shade they know they shall never sit in. - Greek Proverb",
    "A great judge of character is how appropriate their “screw it” moments are.",
    "Everyone’s a piece of s*** if you smell hard enough.",
    "When u don’t sleep, somebody else gets your dreams.",
    "Friendships are like flowers. You can plant the seed, but you also got to water it. - Bobby Lee",
  ];

  return (
    <Carousel.Item interval={10000}>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1516389207633-e5784a9518d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="One"
        style={{ opacity: 0.3, borderRadius: "100px" }}
      />
      <Carousel.Caption style={{ textAlign: "center", height: "300px" }}>
        <h2>temp</h2>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default Quote;

// return (
//   <Carousel.Item interval={10000}>
//     <img
//       className="d-block w-100"
//       src="https://images.unsplash.com/photo-1516389207633-e5784a9518d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
//       alt="One"
//       style={{ opacity: 0.3, borderRadius: "100px" }}
//     />
//     <Carousel.Caption style={{ textAlign: "center", height: "300px" }}>
//       <h2>{elem}</h2>
//     </Carousel.Caption>
//   </Carousel.Item>
// );
