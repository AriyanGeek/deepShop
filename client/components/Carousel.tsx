"use client"; //! important to have this line !


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Carousel = () => {
  return (
    <>
      <StyledSwiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        
      >
        <SwiperSlide><img src='./male-worker.jpg' alt='maleWorker'/></SwiperSlide>
        <SwiperSlide><img src='./images.jpg' alt='maleWorker'/></SwiperSlide>
        <SwiperSlide><img src='./images.jpg' alt='maleWorker'/></SwiperSlide>
      </StyledSwiper>
    </>
  );
}
const StyledSwiper = styled(Swiper)`
  width: 100%;
  
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
