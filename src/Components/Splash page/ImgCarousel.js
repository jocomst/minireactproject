import React from "react";
import "C:\\Users\\user\\Downloads\\eshopreact\\src\\App.css";
import { carouselImages } from "./carouselHelpers";
import { useState } from "react";

const Carousel = ({ imgs }) => {
  const [curIndex, setIndex] = useState(0);

  const goToNextSlide = (e) => {
    e.preventDefault();

    if (curIndex >= carouselImages.length - 1) {
      setIndex(0);
    } else {
      setIndex(curIndex + 1);
    }
  };

  const goToPrevSlide = (e) => {
    e.preventDefault();

    if (curIndex <= 0) {
      setIndex(carouselImages.length - 1);
    } else {
      setIndex(curIndex - 1);
    }
  };

  return (
    <>
      <div className="home-title">
        <h2>Home</h2>
      </div>
      <div className="carousel-img">
        <button onClick={(e) => goToPrevSlide(e)}>Prev</button>
        <img src={carouselImages[curIndex].img} />
        <button onClick={(e) => goToNextSlide(e)}>Next</button>
      </div>
    </>
  );
};

export default Carousel;
