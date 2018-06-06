import {combineReducers} from 'redux';
import userinfo from './userinfo';
import store from './store';

// 可以把多个规则合并
export default combineReducers({
  userinfo,
  store
});

