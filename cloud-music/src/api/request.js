import { axiosInstance } from './config';

// 轮播图
export const getSwiperRequest = () => {
    return axiosInstance.get('/banner');
}

// 推荐歌单
export const getRecommendListRequest = () => {
    return axiosInstance.get('/personalized');
}