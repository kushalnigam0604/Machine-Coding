import { Link } from "react-router-dom";
import data from "./CarouselImageData.json";
import "./Carousel.css";
import { useEffect, useRef, useState } from "react";

const Carousel = () => {
  const [imageCounter, setImageCounter] = useState(0);
  const DATA_LENGTH = data.length;
  const intervalRef = useRef(null);

  const handleNextCounter = () => {
    setImageCounter((prev) => {
      if (prev + 1 === DATA_LENGTH) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };
  const handlePrevCounter = () => {
    setImageCounter((prev) => {
      if (prev === 0) {
        return DATA_LENGTH - 1;
      } else {
        return prev - 1;
      }
    });
  };

  const startAutoSlider = () => {
    console.log('start')
    intervalRef.current = setInterval(() => {
      handleNextCounter();
    }, 2000);
  };

  const stopAutoSlider = () => {
    console.log('stop')
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlider();
    return stopAutoSlider;
  },[]);

  return (
    <>
      <Link to="/" className="problemTabs">
        🔙 Back to Home Page.
      </Link>
      <h2>Image Carousel</h2>

      <div className="carouselBody" onMouseLeave={startAutoSlider} onMouseEnter={stopAutoSlider}>
        <button className="carouselLeftBtn" onClick={handlePrevCounter}>
          {"<"}
        </button>
        <img
          className="carouselImage"
          src={`${data[imageCounter]?.download_url}`}
          alt=""
        />
        <button className="carouselRightBtn" onClick={handleNextCounter}>
          {">"}
        </button>
      </div>
    </>
  );
};

export default Carousel;
