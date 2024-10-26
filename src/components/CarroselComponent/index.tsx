"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import FeaturedCard from "../CardCarrosel";

export interface IEvents {
  id: string;
  image: string;
  link: string;
}

interface IEventsCarouselProps {
  eventsCard: IEvents[];
}

const EventsCarousel: React.FC<IEventsCarouselProps> = ({ eventsCard }) => {
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 900);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false, // Esconde setas para deixar o carrossel mais limpo
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {eventsCard.map((eventCard) => (
        <div key={eventCard.id}>
          <FeaturedCard eventCard={eventCard} />
        </div>
      ))}
    </Slider>
  );
};

export default EventsCarousel;
