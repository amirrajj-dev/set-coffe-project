'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation , EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
function Banner() {
  return (
    <>
    <>
      <Swiper
        rewind={true}
        navigation={true}
        autoplay={{ delay: 5000 }}
        loop={true}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[Navigation , Autoplay , EffectCoverflow]}
        className='!relative !top-0 w-full z-10 -translate-y-28' 
      >
        <SwiperSlide>
          <Image width={1524} height={650} src="/images/slide.jpg" alt="coffe slide" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={1524} height={650} src="/images/winter-slie.jpg" alt="coffe slide" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={1524} height={650} src="/images/fall.jpg" alt="coffe slide" />
        </SwiperSlide>
      </Swiper>
    </>
    </>
  )
}

export default Banner