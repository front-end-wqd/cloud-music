import React from 'react';
import Swiper from '../../component/swiper/index';
import RecommendList from '../../component/list/index';

function Recommend() {
    return (
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
                        count: 200000,
                        url: "https://i.postimg.cc/MXkKpfx6/Wechat-IMG633.jpg"
                    },
                ]}
            ></RecommendList>
        </div>
    );
}

export default React.memo(Recommend);
