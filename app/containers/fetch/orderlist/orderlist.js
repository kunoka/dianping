import {get} from '../get';

export function getOrderList(username) {
  let result = get('/api/orderlist/' + username);
  return result;
}