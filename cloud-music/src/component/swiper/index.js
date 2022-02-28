import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.scss';

function MySwiper(props) {
    const {swiperItem} = props;

    return (
        <Swiper
            loop
            modules={[Autoplay, Pagination]}
            autoplay
            pagination
        >
            {
                swiperItem.map((item, index) =>
                    <SwiperSlide key={index}>
                        <div>{item}</div>
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
}

export default React.memo(MySwiper);