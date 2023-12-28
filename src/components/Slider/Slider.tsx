import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Slide {
  id: number;
  title: string;
  imageUrl: string;
}

interface SliderComponentProps {
  slides: Slide[];
}

const SliderComponent: React.FC<SliderComponentProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <Slider {...settings} initialSlide={currentSlide}>
      {slides.map((slide) => (
        <div key={slide.id}>
          <img
            src={slide.imageUrl}
            alt={slide.title}
            style={{
              width: "100%", // Set width to 100% for responsiveness
              height: "auto", // Maintain aspect ratio
            }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
