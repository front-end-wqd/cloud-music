import * as actionType from './constant';
import { fromJS } from 'immutable';
import { getSwiperRequest, getRecommendListRequest } from '../../../api/request';

export const changeBannerList = (data) => ({
    type: actionType.CHANGE_BANNER,
    data: fromJS(data)
})

export const changeRecommendList = (data) => ({
    type: actionType.CHANGE_RECOMMEND_LIST,
    data: fromJS(data)
})

export const getSwiperData = () => {
    return dispatch => {
        getSwiperRequest()
        .then(
            data => dispatch(changeBannerList(data.banners))
        )
        .catch(() => {
            console.log('获取轮播图发生异常');
        })
    }
}

export const getRecommendListData = () => {
    return dispatch => {
        getRecommendListRequest()
        .then(
            data => dispatch(changeRecommendList(data.result))
        )
        .catch(() => {
            console.log('获取推荐歌单发生异常');
        })
    }
}