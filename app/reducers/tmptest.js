
export default function tmptest(state = {tmp: 'no'}, action) {
  switch (action.type) {
  case 'test':
    return action.data;
  default:
    return state;
  }
}