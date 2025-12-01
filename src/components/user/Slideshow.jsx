import React, { useEffect, useState } from "react";
import img1 from '../../assets/img1.webp'
import img2 from '../../assets/img2.webp'
import img3 from '../../assets/img3.webp'
import img4 from '../../assets/img4.webp'
import img5 from '../../assets/img5.webp'

const Slideshow = () => {

  const images = [img1,img2,img3,img4,img5]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const totalSlides = images.length;
  const interval = 3000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  useEffect(() => {
    // when reaching the cloned slide, reset instantly to index 0
    if (currentIndex === totalSlides) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // disable animation
        setCurrentIndex(0);        // jump back to real first image
      }, 600); // match transition duration (0.6s)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalSlides]);

  return (
    <div className="m-4">
    <div className="slideshow-container">
      <div
        className="slideshow-slider"
      
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.6s ease-in-out" : "none",
        }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt="slide" className="slide" />
        ))}
        {/* clone the first image at the end */}
        <img src={images[0]} alt="clone-slide" className="slide" />
      </div>
    </div>
    <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => {
              setIsTransitioning(true);
              setCurrentIndex(index);
            }}
          >
            {"\u25CF"}
          </span>
        ))}
      </div>

    </div>
  );
};

export default Slideshow;