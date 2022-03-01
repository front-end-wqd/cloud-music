import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../main/Recommend/store/index';

export default combineReducers ({
    recommend: recommendReducer
});