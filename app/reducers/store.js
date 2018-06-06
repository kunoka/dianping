import * as actionTypes from '@/constants/store';

const initialStore = [];

export function store(state = initialStore, action) {
  switch (action.type) {
  case actionTypes.STORE_UPDATE:
    return;
  case actionTypes.STORE_ADD:
    return;
  case actionTypes.STORE_RM:
    return;
  default:
    return state;
  }


}