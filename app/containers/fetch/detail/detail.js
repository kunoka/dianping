import {get} from '../get';

export function getInfoData(id) {
  const result = get('/api/detail/info/' + id);
  return result;
}

export function getCommentData(id, page) {
  const result = get('/api/detail/comment/' + id + '/' + page);
  return result;
}