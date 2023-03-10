import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function Carousel() {
  return (
    <div className='relative top-[-60px]'>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className='mySwiper h-[392px] sm:h-[500px]'>
        <SwiperSlide className='relative'>
          <div className='top-40 left-5 absolute z-50 text-white'>
            <h1 className='text-5xl font-bold'>Sport Welcome Pack</h1>
            <h5 className='text-2xl mt-4'>₹90,000 Casino Package</h5>
          </div>
          <img
            src='image/casino.jpg'
            className='h-full object-cover w-full '
          />
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <div className='top-40 left-5 absolute z-50 text-white'>
            <h1 className='text-4xl font-bold'>Sport Welcome hack</h1>
            <h5 className='text-2xl mt-4'>₹90,000 Casino Package</h5>
          </div>
          <img
            src='image/cricket.jpeg'
            className='h-full object-cover w-full'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
