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

    return (
        <div className='scroll-box'>
            <Scroll>
                <div>
                    <Swiper bannerList={bannerListJS}></Swiper>
                    <RecommendList recommendList={recommendListJS}></RecommendList>
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
