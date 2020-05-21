import { SET_CURRENT_USER } from '../actionTypes';

function authReducer(state, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user,
      };
    default:
      return state;
  }
}

export default authReducer;