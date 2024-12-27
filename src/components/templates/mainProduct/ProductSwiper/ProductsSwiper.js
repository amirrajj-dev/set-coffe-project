'use client';
import CoffeBox from "@/components/modules/CoffeBox/CoffeBox";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './productSwiper.css'; // Import the custom CSS file

function ProductsSwiper({products}) {
  const numberOfProducts = 8;
  const slidesPerView = 4;
  const paginationCount = Math.ceil(numberOfProducts / slidesPerView);

  return (
    <div className="products-swiper-container mb-8">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerView}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
      {products.map(product=>(
        <SwiperSlide key={product._id}>
          <CoffeBox {...product} />
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
}

export default ProductsSwiper;