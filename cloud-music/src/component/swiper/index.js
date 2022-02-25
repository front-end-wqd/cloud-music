import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import './index.scss'

function MySwiper() {
    return (
        <Swiper
            loop
            modules={[Autoplay]}
            autoplay
        >
            <SwiperSlide>
                <div>1</div>
            </SwiperSlide>
            <SwiperSlide>
                <div>2</div>
            </SwiperSlide>
            <SwiperSlide>
                <div>3</div>
            </SwiperSlide>
            <SwiperSlide>
                <div>4</div>
            </SwiperSlide>
        </Swiper>
    );
}

export default MySwiper;