import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.scss';

function MySwiper(props) {
    const {bannerList} = props;

    return (
        <Swiper
            loop
            modules={[Autoplay, Pagination]}
            autoplay
            pagination
        >
            {
                bannerList.map((item) =>
                    <SwiperSlide key={item.targetId}>
                        <img className='filter' alt='' src={item.imageUrl} />
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