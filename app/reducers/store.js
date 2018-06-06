import * as actionTypes from '@/constants/store';

const initialState = [];

export default function store(state = initialState, action) {
  switch (action.type) {
  case actionTypes.STORE_UPDATE:
    return action.data;
  case actionTypes.STORE_ADD:
    state.unshift(action.data);
    return state;
  case actionTypes.STORE_RM:
    state.filter((item) => {
      if(action.data.id !== item.id) {
        return item;
      }
    });
    return state;
  default:
    return state;
  }
}