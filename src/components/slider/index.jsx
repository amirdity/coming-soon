import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import image1 from "../../assets/images-slide/img_1.jpg";
import image2 from "../../assets/images-slide/img_2.jpg";
import image3 from "../../assets/images-slide/img_3.jpg";
import image4 from "../../assets/images-slide/img_4.jpg";
import image5 from "../../assets/images-slide/img_5.jpg";
import image6 from "../../assets/images-slide/img_6.jpg";
import image7 from "../../assets/images-slide/img_7.jpg";
import "./style.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
export default function Slider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-5" src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-5" src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-5" src={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-5" src={image4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-5" src={image5} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-5" src={image6} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-5" src={image7} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
