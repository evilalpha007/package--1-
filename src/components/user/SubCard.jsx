import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function SubCard() {
  return (
    <>


      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        <SwiperSlide className="ml-10 mb-10 swiper_class">
          <div className="subcard_slider">
            <div className="SubCard_inner"></div>
          </div>
          <div className="subcard_text">
          <div className="subcard_inner_text">
          <h3 className="font-semibold text-white text-xl">Sport Betting</h3>
          <button className="subCard_btn">Bet Now</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ml-10 mb-10 swiper_class">
          <div className="subcard_slider">
            <div className="SubCard_inner"></div>
          </div>
          <div className="subcard_text">
          <div className="subcard_inner_text">
          <h3 className="font-semibold text-white text-xl">Sport Betting</h3>
          <button className="subCard_btn">Bet Now</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ml-10 mb-10 swiper_class">
          <div className="subcard_slider">
            <div className="SubCard_inner"></div>
          </div>
          <div className="subcard_text">
          <div className="subcard_inner_text">
          <h3 className="font-semibold text-white text-xl">Sport Betting</h3>
          <button className="subCard_btn">Bet Now</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ml-10 mb-10 swiper_class">
          <div className="subcard_slider">
            <div className="SubCard_inner"></div>
          </div>
          <div className="subcard_text">
          <div className="subcard_inner_text">
          <h3 className="font-semibold text-white text-xl">Sport Betting</h3>
          <button className="subCard_btn">Bet Now</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ml-10 mb-10 swiper_class">
          <div className="subcard_slider">
            <div className="SubCard_inner"></div>
          </div>
          <div className="subcard_text">
          <div className="subcard_inner_text">
          <h3 className="font-semibold text-white text-xl">Sport Betting</h3>
          <button className="subCard_btn">Bet Now</button>
          </div>
          </div>
        </SwiperSlide>
       
        
      </Swiper>
    </>
  );
}
