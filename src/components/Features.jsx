import { dataFeatures } from "../data";
import SectionFeature from "./global/SectionFeature";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import { Autoplay, FreeMode } from "swiper";

const Features = () => {
  return (
    <section id="services" className="bg-gray-100 dark:bg-primary-dark pt-20 pb-20 overflow-x-hidden relative">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 flex items-center flex-col justify-center text-center lg:mb-20 px-8">
              <span className="text-primary mb-2 block md:text-lg text-sm font-semibold ">
                Pourquoi nous choisir
              </span>
              <h2 className="capitalize text-gray-900 dark:text-gray-100 mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                Location Voiture Laayoune
              </h2>
              <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500 dark:text-gray-300">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <Swiper
          breakpoints={{
            540: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode]}
          className="mySwiper md:px-8 px-3"
        >
          <div className="-mx-4 px-4 lg:px-0 flex flex-wrap">
            {dataFeatures.map((item, key) => (
              <SwiperSlide key={key}>
                <SectionFeature {...item} key={key} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Features;
