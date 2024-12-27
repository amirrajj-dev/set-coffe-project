"use client";
import ArticleBox from "@/components/modules/ArticleBox/ArticleBox";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

function Articles({ blogs }) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-y-6 mt-16 mb-12 px-4 md:px-8 lg:px-12"
      data-aos="fade-up"
    >
      <h2 className="text-green-900 text-4xl font-bold mb-4">مقالات ما</h2>
      <p className="text-gray-500 text-lg mb-6">دانستنی های جذاب دنیای قهوه</p>
      <Swiper
        rewind={true}
        navigation={true}
        autoplay={{ delay: 5000 }}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        modules={[Navigation, Autoplay]}
        className="w-full"
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            <ArticleBox {...blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Articles;