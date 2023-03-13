import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function PaymentCarousel() {
  return (
    <>
      <div className='catogory'>
        <div className='sub_catogory text-white mt-5'>
          <h2 className='font-bold text-2xl'>Popular Payment methods</h2>
          <div className='leftpart mr-5 flex items-center'>
            {/*  <span className='mr-5 font-medium text-lg text-amber-300 cursor-pointer'>
              Show All
            </span>
          <div className='flex gap-2'>
              <span className='material-symbols-rounded border border-[#5f687c] rounded-full '>
                chevron_left
              </span>
              <span className='material-symbols-rounded border border-[#5f687c] rounded-full'>
                chevron_right
              </span>
            </div>*/}
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className='mySwiper  '>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
          (ele, i) => {
            return (
              <SwiperSlide key={i} className='my_carouesl ml-10'>
                <div className='payment_img'>
                  <img src='./image/paymentcart.png' alt='' />
                </div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </>
  );
}
