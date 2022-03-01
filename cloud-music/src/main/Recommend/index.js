import React from 'react';
import Swiper from '../../component/swiper/index';
import RecommendList from '../../component/list/index';
import Scroll from '../../component/scroll/index';
import './index.scss';

function Recommend() {
    return (
        <div className='scroll-box'>
            <Scroll>
                <div>
                    <Swiper swiperItem={[1, 2, 3, 4]}></Swiper>
                    <RecommendList
                        list={[
                            {
                                name: "推荐歌单1",
                                count: 10000,
                                url: "https://i.postimg.cc/MXkKpfx6/Wechat-IMG633.jpg"
                            },
                            {
                                name: "推荐歌单2",
                                count: 5000,
                                url: "https://i.postimg.cc/MXkKpfx6/Wechat-IMG633.jpg"
                            },
                            {
                                name: "推荐歌单3",
                                count: 500,
                                url: "https://i.postimg.cc/MXkKpfx6/Wechat-IMG633.jpg"
                            },
                            {
                                name: "推荐歌单4",
                                count: 25000,
                                url: "https://i.postimg.cc/MXkKpfx6/Wechat-IMG633.jpg"
                            },
                            {
                                name: "推荐歌单5",
                                count: 200000,
                                url: "https://i.postimg.cc/MXkKpfx6/Wechat-IMG633.jpg"
                            },
                        ]}
                    ></RecommendList>
                </div>
            </Scroll>
        </div>
    );
}

export default React.memo(Recommend);
