import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Teachers.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

// import images
import roma from "../../img/roma.png";
import diyor from "../../img/diyor.png";
import ramiz from "../../img/ramiz.png";

const Teachers = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <img src={roma} />
                <h3>Рома Садыков</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>Учитель по front-end разработки</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <img src={diyor} />
                <h3>Диёр Хасанов</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>Учитель по front-end разработки</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <img src={ramiz} />
                <h3>Рамизжон Зиёдуллаев</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>Учитель по back-end разработки</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>shaxnoza</SwiperSlide>
        <SwiperSlide>sevinch</SwiperSlide>
        <SwiperSlide>matematika malim </SwiperSlide>
        <SwiperSlide>sabina</SwiperSlide>
        <SwiperSlide>timur</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Teachers;
