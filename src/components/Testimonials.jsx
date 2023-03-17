import React from "react";
import TestimonialsCard from "./global/TestimonialsCard"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay } from "swiper";
import { testimonialsData } from "../data";

const Testimonials = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="text-center py-8">
        <h2 className="text-lg font-semibold text-primary">Témoignage</h2>
        <p className="mt-2 text-3xl font-bold capitalize tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
          location de voiture laayoune Témoignage
        </p>
      </div>
      <Swiper
        slidesPerView={1}
        effect={"fade"}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper md:px-8 px-3"
      >
        {testimonialsData.map((item) => (
          <SwiperSlide key={item.name}>
            <TestimonialsCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
