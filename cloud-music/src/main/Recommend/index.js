import React, { useEffect } from 'react';
import Swiper from '../../component/swiper/index';
import { connect } from 'react-redux';
import * as actionType from './store/createAction';
import RecommendList from '../../component/list/index';
import Scroll from '../../component/scroll/index';
import './index.scss';

function Recommend(props) {
    const { bannerList, recommendList } = props;
    const { getSwiperDataDispatch, getRecommendListDataDispatch } = props;

    useEffect(() => {
        getSwiperDataDispatch();
        getRecommendListDataDispatch();
        // eslint-disable-next-line
    }, []);

    const bannerListJS = bannerList ? bannerList.toJS() : [];
    const recommendListJS = recommendList ? recommendList.toJS() : [];

    console.log(bannerListJS);
    console.log(recommendListJS);

    return (
        <div className='scroll-box'>
            <Scroll>
                <div>
                <Swiper swiperItem={bannerListJS}></Swiper>
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

const mapStateToProps = (state) => ({
    bannerList: state.getIn(['recommend', 'bannerList']),
    recommendList: state.getIn(['recommend', 'recommendList']),
})

const mapDispatchToProps = (dispatch) => {
    return {
        getSwiperDataDispatch() {
            dispatch(actionType.getSwiperData());
        },
        getRecommendListDataDispatch() {
            dispatch(actionType.getRecommendListData());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));
