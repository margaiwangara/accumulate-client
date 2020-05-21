import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';

function errorReducer(state, action) {
  switch (action.type) {
    case ADD_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case REMOVE_ERROR:
      return {
        ...state,
        error: {},
      };
    default:
      return state;
  }
}

export default errorReducer;
