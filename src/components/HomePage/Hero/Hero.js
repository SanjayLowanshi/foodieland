import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Slider from "./Slider";
import "swiper/css";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero-section">
      <Swiper
        spaceBetween={0}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        loop={true}
        centeredSlides={true}
      >
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
