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
                swiperItem.map((item) =>
                    <SwiperSlide key={item.targetId}>
                        <div>
                            <img alt='' src={item.imageUrl} />
                        </div>
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
}

export default React.memo(MySwiper);