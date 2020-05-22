import { GET_ARTICLES, GET_ARTICLE } from '../actionTypes';

function articleReducer(state, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        count: action.count,
        pagination: action.pagination,
        data: action.data,
      };
    case GET_ARTICLE:
      return {
        data: action.data,
      };
    default:
      return state;
  }
}

export default articleReducer;
