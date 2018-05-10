import * as actionTypes from '../constants/userinfo'

export function update(data) {
  return {
    type: actionTypes.USERINFO_UPDATE,
    data
  }
}

export function change(data) {
  return {
    type: actionTypes.USERINFO_UPDATE,
    data
  }
}

export function test(data) {
  return {
    type: 'test',
    data
  }
}