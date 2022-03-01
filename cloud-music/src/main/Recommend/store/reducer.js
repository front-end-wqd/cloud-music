import * as actionType from './constant';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    bannerList: [], // 轮播图
    recommendList: [], // 推荐歌单
})

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case actionType.CHANGE_BANNER:
            return state.set('bannerList', action.data);
        case actionType.CHANGE_RECOMMEND_LIST:
            return state.set('recommendList', action.data);
        default:
            return state;
    }
}

export default reducer;