import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Courses.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

// import images
import frontend from "../../img/frontend.png";
import backend from "../../img/backend.png";
import english from "../../img/english.png";
import matem from "../../img/matem.png";
import Wave from '../Wave/Wave'

const Courses = () => {
  return (
    <div className="courses">
      <h1 className="tittlee">Наши курсы</h1>
      <div className="wrapper-courses">
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
            <div className="course">
              <div className="top">
                <div className="text-course">
                  <h3 className="title-course">Python Backend</h3>
                  <p className="dur-course">Длительность 8 месяцев</p>
                  <del className="old-price">1.200.000</del>
                  <br />
                  <b className="new-price">900.000 сум/мес</b>
                </div>

                <div className="img-course">
                  <img src={backend} alt="" />
                </div>
              </div>
              <div className="bottom">
                <p className="des-course">
                  Курс "Python Backend: Сердце современных сайтов" в Самарканде
                  научит тебя создавать мощные серверные решения. Освой
                  профессию, которая открывает возможности работать над
                  серьёзными IT-проектами, в том числе удалённо.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="course">
              <div className="top">
                <div className="text-course">
                  <h3 className="title-course">Front-End</h3>
                  <p className="dur-course">Длительность 8 месяцев</p>
                  <del className="old-price">1.150.000</del>
                  <br />
                  <b className="new-price">800.000 сум/мес</b>
                </div>

                <div className="img-course">
                  <img src={frontend} alt="" />
                </div>
              </div>
              <div className="bottom">
                <p className="des-course">
                  Курс "Python Backend: Сердце современных сайтов" в Самарканде
                  научит тебя создавать мощные серверные решения. Освой
                  профессию, которая открывает возможности работать над
                  серьёзными IT-проектами, в том числе удалённо.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="course">
              <div className="top">
                <div className="text-course">
                  <h3 className="title-course">Английский язык</h3>
                  <p className="dur-course">Длительность 6 месяцев</p>
                  <del className="old-price">500.000</del>
                  <br />
                  <b className="new-price">350.000 сум/мес</b>
                </div>

                <div className="img-course">
                  <img src={english} alt="" />
                </div>
              </div>
              <div className="bottom">
                <p className="des-course">
                  Курс "Python Backend: Сердце современных сайтов" в Самарканде
                  научит тебя создавать мощные серверные решения. Освой
                  профессию, которая открывает возможности работать над
                  серьёзными IT-проектами, в том числе удалённо.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="course">
              <div className="top">
                <div className="text-course">
                  <h3 className="title-course">Математика</h3>
                  <p className="dur-course">Длительность 6 месяцев</p>
                  <del className="old-price">700.000</del>
                  <br />
                  <b className="new-price">500.000 сум/мес</b>
                </div>

                <div className="img-course">
                  <img src={matem} alt="" />
                </div>
              </div>
              <div className="bottom">
                <p className="des-course">
                  Курс "Python Backend: Сердце современных сайтов" в Самарканде
                  научит тебя создавать мощные серверные решения. Освой
                  профессию, которая открывает возможности работать над
                  серьёзными IT-проектами, в том числе удалённо.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <Wave />
    </div>
  );
};

export default Courses;
