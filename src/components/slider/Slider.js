import React from "react";
import { Navigation, Scrollbar, A11y, EffectCoverflow, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import "./Slider.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';


const Slider = ({slides}) => {
    return (
        <Swiper
            modules={[Navigation, EffectCoverflow, Pagination, Scrollbar, A11y]}
            effect={'coverflow'}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="swiper-container"
            >
                {slides.map((slide) =>
                    <SwiperSlide className="swiper-slide" key={slide.src}>
                        {slide}
                    </SwiperSlide>
                )}
        </Swiper>
    );
};

export default Slider;

