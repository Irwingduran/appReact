import React, { useRef, useState } from 'react';
import Template1 from "../../media/template1.jpg";
import "./portfolio.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portafolio </h2>
      <span className="section__subtitle">
        algunos de los proyectos donde he participado.
        <br /> me gusta crear experiencias memorables.
      </span>




      <div className="portfolio__container container swiper-container">


        <div className='swiper-wrapper'>
          <>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="portfolio__container"
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >


              {/* PORTFOLIO 1*/}
              <SwiperSlide>
                <div className='portfolio__content grid swiper-slide'>
                  <img src={Template1} className="portfolio__img" />
                  <div className="portfolio__data">
                    <h3 className="portfolio__title">Sitio web</h3>
                    <p className="portfolio__description">diseño creado para una </p>
                    <a href='#' className='button button--flex buttor--smell portfolio__button'>
                      <i className="uil uil-arrow-right button__icon"></i> Ver
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              {/* PORTFOLIO 2*/}
              <SwiperSlide>

                <div className='portfolio__content grid swiper-slide'>
                  <img src={Template1} className="portfolio__img" />
                  <div className="portfolio__data">
                    <h3 className="portfolio__title">Sitio web</h3>
                    <p className="portfolio__description">diseño moderno y acorde a los nuevos tiempos</p>
                    <a href='#' className='button button--flex buttor--smell portfolio__button'>
                      <i className="uil uil-arrow-right button__icon"></i>Ver
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              {/* PORTFOLIO 3*/}
              <SwiperSlide>
                <div className='portfolio__content grid swiper-slide'>
                  <img src={Template1} className="portfolio__img" />
                  <div className="portfolio__data">
                    <h3 className="portfolio__title">Sitio web</h3>
                    <p className="portfolio__description">diseño moderno y acorde a los nuevos tiempos</p>
                    <a href='#' className='button button--flex buttor--smell portfolio__button'>
                      <i className="uil uil-arrow-right button__icon"></i> Ver
                    </a>
                  </div>
                </div>
              </SwiperSlide>




            </Swiper>
          </>

        </div>



      </div>


      <script src="https://cdn.jsdelivr.net/npm/swiper@9.1.1/swiper-bundle.min.js"></script>



    </section>

  )
}



export default Portfolio;