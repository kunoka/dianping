import {combineReducers} from 'redux'
import userinfo from './userinfo'
import tmptest from './tmptest'

// 可以把多个规则合并
export default combineReducers({
  userinfo,
  tmptest
})

