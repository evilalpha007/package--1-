import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function EditorChoice() {
  return (
    <>
      <div className='catogory mt-5'>
        <div className='sub_catogory text-white'>
          <h2 className='font-bold text-2xl'>Editors choice</h2>
          <div className='leftpart mr-5 flex items-center'>
            <span className='mr-5 font-medium text-lg text-amber-300 cursor-pointer'>
              Show All
            </span>
            <div className='flex gap-2'>
              <span className='material-symbols-rounded border border-[#5f687c] rounded-full '>
                chevron_left
              </span>
              <span className='material-symbols-rounded border border-[#5f687c] rounded-full'>
                chevron_right
              </span>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className='mySwiper'>
        <SwiperSlide className='my_carouesl'>
          <div className='carousel_img  carousel_img_editotor'>
            <div className='game-card__buttons'>
              <button
                className='btn btn-round btn-play game-card__play-for-real'
                type='button'
                fdprocessedid='ept5yf'>
                <span className='btn__icon'>
                  <svg width='21' height='25' viewBox='0 0 21 25' fill='none'>
                    <path
                      d='M2.11914 3.92574C2.11914 2.13644 4.09796 1.05519 5.60376 2.02169L18.5665 10.3418C19.9537 11.2321 19.9537 13.2595 18.5665 14.1499L5.60376 22.4699C4.09796 23.4364 2.11914 22.3552 2.11914 20.5659V3.92574Z'
                      stroke='#232939'
                      strokeWidth='2.47745'
                      strokeLinecap='round'
                      strokeLinejoin='round'></path>
                  </svg>
                </span>
              </button>
              <span className='game-card__name'>27 Wins</span>
              <button
                className='btn btn-md btn-demo game-card__play-for-fun'
                type='button'
                fdprocessedid='v9ot9s'>
                <span className='btn__label'>Play for fun</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='my_carouesl'>
          <div className='carousel_img'>
            <div className='game-card__buttons'>
              <button
                className='btn btn-round btn-play game-card__play-for-real'
                type='button'
                fdprocessedid='ept5yf'>
                <span className='btn__icon'>
                  <svg width='21' height='25' viewBox='0 0 21 25' fill='none'>
                    <path
                      d='M2.11914 3.92574C2.11914 2.13644 4.09796 1.05519 5.60376 2.02169L18.5665 10.3418C19.9537 11.2321 19.9537 13.2595 18.5665 14.1499L5.60376 22.4699C4.09796 23.4364 2.11914 22.3552 2.11914 20.5659V3.92574Z'
                      stroke='#232939'
                      strokeWidth='2.47745'
                      strokeLinecap='round'
                      strokeLinejoin='round'></path>
                  </svg>
                </span>
              </button>
              <span className='game-card__name'>27 Wins</span>
              <button
                className='btn btn-md btn-demo game-card__play-for-fun'
                type='button'
                fdprocessedid='v9ot9s'>
                <span className='btn__label'>Play for fun</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='my_carouesl'>
          <div className='carousel_img'>
            <div className='game-card__buttons'>
              <button
                className='btn btn-round btn-play game-card__play-for-real'
                type='button'
                fdprocessedid='ept5yf'>
                <span className='btn__icon'>
                  <svg width='21' height='25' viewBox='0 0 21 25' fill='none'>
                    <path
                      d='M2.11914 3.92574C2.11914 2.13644 4.09796 1.05519 5.60376 2.02169L18.5665 10.3418C19.9537 11.2321 19.9537 13.2595 18.5665 14.1499L5.60376 22.4699C4.09796 23.4364 2.11914 22.3552 2.11914 20.5659V3.92574Z'
                      stroke='#232939'
                      strokeWidth='2.47745'
                      strokeLinecap='round'
                      strokeLinejoin='round'></path>
                  </svg>
                </span>
              </button>
              <span className='game-card__name'>27 Wins</span>
              <button
                className='btn btn-md btn-demo game-card__play-for-fun'
                type='button'
                fdprocessedid='v9ot9s'>
                <span className='btn__label'>Play for fun</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='my_carouesl'>
          <div className='carousel_img'>
            <div className='game-card__buttons'>
              <button
                className='btn btn-round btn-play game-card__play-for-real'
                type='button'
                fdprocessedid='ept5yf'>
                <span className='btn__icon'>
                  <svg width='21' height='25' viewBox='0 0 21 25' fill='none'>
                    <path
                      d='M2.11914 3.92574C2.11914 2.13644 4.09796 1.05519 5.60376 2.02169L18.5665 10.3418C19.9537 11.2321 19.9537 13.2595 18.5665 14.1499L5.60376 22.4699C4.09796 23.4364 2.11914 22.3552 2.11914 20.5659V3.92574Z'
                      stroke='#232939'
                      strokeWidth='2.47745'
                      strokeLinecap='round'
                      strokeLinejoin='round'></path>
                  </svg>
                </span>
              </button>
              <span className='game-card__name'>27 Wins</span>
              <button
                className='btn btn-md btn-demo game-card__play-for-fun'
                type='button'
                fdprocessedid='v9ot9s'>
                <span className='btn__label'>Play for fun</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='my_carouesl'>
          <div className='carousel_img'>
            <div className='game-card__buttons'>
              <button
                className='btn btn-round btn-play game-card__play-for-real'
                type='button'
                fdprocessedid='ept5yf'>
                <span className='btn__icon'>
                  <svg width='21' height='25' viewBox='0 0 21 25' fill='none'>
                    <path
                      d='M2.11914 3.92574C2.11914 2.13644 4.09796 1.05519 5.60376 2.02169L18.5665 10.3418C19.9537 11.2321 19.9537 13.2595 18.5665 14.1499L5.60376 22.4699C4.09796 23.4364 2.11914 22.3552 2.11914 20.5659V3.92574Z'
                      stroke='#232939'
                      strokeWidth='2.47745'
                      strokeLinecap='round'
                      strokeLinejoin='round'></path>
                  </svg>
                </span>
              </button>
              <span className='game-card__name'>27 Wins</span>
              <button
                className='btn btn-md btn-demo game-card__play-for-fun'
                type='button'
                fdprocessedid='v9ot9s'>
                <span className='btn__label'>Play for fun</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='my_carouesl'>
          <div className='carousel_img'>
            <div className='game-card__buttons'>
              <button
                className='btn btn-round btn-play game-card__play-for-real'
                type='button'
                fdprocessedid='ept5yf'>
                <span className='btn__icon'>
                  <svg width='21' height='25' viewBox='0 0 21 25' fill='none'>
                    <path
                      d='M2.11914 3.92574C2.11914 2.13644 4.09796 1.05519 5.60376 2.02169L18.5665 10.3418C19.9537 11.2321 19.9537 13.2595 18.5665 14.1499L5.60376 22.4699C4.09796 23.4364 2.11914 22.3552 2.11914 20.5659V3.92574Z'
                      stroke='#232939'
                      strokeWidth='2.47745'
                      strokeLinecap='round'
                      strokeLinejoin='round'></path>
                  </svg>
                </span>
              </button>
              <span className='game-card__name'>27 Wins</span>
              <button
                className='btn btn-md btn-demo game-card__play-for-fun'
                type='button'
                fdprocessedid='v9ot9s'>
                <span className='btn__label'>Play for fun</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='my_carouesl'>
          <div className='carousel_img'>
            <div className='game-card__buttons'>
              <button
                className='btn btn-round btn-play game-card__play-for-real'
                type='button'
                fdprocessedid='ept5yf'>
                <span className='btn__icon'>
                  <svg width='21' height='25' viewBox='0 0 21 25' fill='none'>
                    <path
                      d='M2.11914 3.92574C2.11914 2.13644 4.09796 1.05519 5.60376 2.02169L18.5665 10.3418C19.9537 11.2321 19.9537 13.2595 18.5665 14.1499L5.60376 22.4699C4.09796 23.4364 2.11914 22.3552 2.11914 20.5659V3.92574Z'
                      stroke='#232939'
                      strokeWidth='2.47745'
                      strokeLinecap='round'
                      strokeLinejoin='round'></path>
                  </svg>
                </span>
              </button>
              <span className='game-card__name'>27 Wins</span>
              <button
                className='btn btn-md btn-demo game-card__play-for-fun'
                type='button'
                fdprocessedid='v9ot9s'>
                <span className='btn__label'>Play for fun</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='my_carouesl'>
          <div className='carousel_img'>
            <div className='game-card__buttons'>
              <button
                className='btn btn-round btn-play game-card__play-for-real'
                type='button'
                fdprocessedid='ept5yf'>
                <span className='btn__icon'>
                  <svg width='21' height='25' viewBox='0 0 21 25' fill='none'>
                    <path
                      d='M2.11914 3.92574C2.11914 2.13644 4.09796 1.05519 5.60376 2.02169L18.5665 10.3418C19.9537 11.2321 19.9537 13.2595 18.5665 14.1499L5.60376 22.4699C4.09796 23.4364 2.11914 22.3552 2.11914 20.5659V3.92574Z'
                      stroke='#232939'
                      strokeWidth='2.47745'
                      strokeLinecap='round'
                      strokeLinejoin='round'></path>
                  </svg>
                </span>
              </button>
              <span className='game-card__name'>27 Wins</span>
              <button
                className='btn btn-md btn-demo game-card__play-for-fun'
                type='button'
                fdprocessedid='v9ot9s'>
                <span className='btn__label'>Play for fun</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='my_carouesl'>
          <div className='carousel_img'>
            <div className='game-card__buttons'>
              <button
                className='btn btn-round btn-play game-card__play-for-real'
                type='button'
                fdprocessedid='ept5yf'>
                <span className='btn__icon'>
                  <svg width='21' height='25' viewBox='0 0 21 25' fill='none'>
                    <path
                      d='M2.11914 3.92574C2.11914 2.13644 4.09796 1.05519 5.60376 2.02169L18.5665 10.3418C19.9537 11.2321 19.9537 13.2595 18.5665 14.1499L5.60376 22.4699C4.09796 23.4364 2.11914 22.3552 2.11914 20.5659V3.92574Z'
                      stroke='#232939'
                      strokeWidth='2.47745'
                      strokeLinecap='round'
                      strokeLinejoin='round'></path>
                  </svg>
                </span>
              </button>
              <span className='game-card__name'>27 Wins</span>
              <button
                className='btn btn-md btn-demo game-card__play-for-fun'
                type='button'
                fdprocessedid='v9ot9s'>
                <span className='btn__label'>Play for fun</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='my_carouesl'>
          <div className='carousel_img'>
            <div className='game-card__buttons'>
              <button
                className='btn btn-round btn-play game-card__play-for-real'
                type='button'
                fdprocessedid='ept5yf'>
                <span className='btn__icon'>
                  <svg width='21' height='25' viewBox='0 0 21 25' fill='none'>
                    <path
                      d='M2.11914 3.92574C2.11914 2.13644 4.09796 1.05519 5.60376 2.02169L18.5665 10.3418C19.9537 11.2321 19.9537 13.2595 18.5665 14.1499L5.60376 22.4699C4.09796 23.4364 2.11914 22.3552 2.11914 20.5659V3.92574Z'
                      stroke='#232939'
                      strokeWidth='2.47745'
                      strokeLinecap='round'
                      strokeLinejoin='round'></path>
                  </svg>
                </span>
              </button>
              <span className='game-card__name'>27 Wins</span>
              <button
                className='btn btn-md btn-demo game-card__play-for-fun'
                type='button'
                fdprocessedid='v9ot9s'>
                <span className='btn__label'>Play for fun</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
