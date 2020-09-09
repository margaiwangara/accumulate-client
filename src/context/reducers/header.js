import { SET_HEADER_CONTENT } from '../actionTypes';

function headerReducer(state, action) {
  switch (action.type) {
    case SET_HEADER_CONTENT:
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
}

export default headerReducer;
