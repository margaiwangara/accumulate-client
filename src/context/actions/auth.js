import { SET_CURRENT_USER, REMOVE_CURRENT_USER } from '../actionTypes';
import apiRequest, { setTokenHeader } from '@/services/api';
import { addError, removeError } from './error';

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user,
  };
};

export const removeCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER,
  };
};

export const setAuthorizationToken = (token) => setTokenHeader(token);

export const logoutUser = (dispatch) => {
  dispatch(removeCurrentUser());
  window.localStorage.removeItem('jwt');
};

export const getUserDetails = () => {
  return new Promise((resolve, reject) => {
    return apiRequest('get', '/api/auth/account')
      .then(({ data }) => resolve(data))
      .catch((error) => reject(error));
  });
};

function authUser(dispatch, errorDispatch, path, payload) {
  return new Promise((resolve, reject) => {
    return apiRequest('post', `/api/auth/${path}`, payload)
      .then(({ token }) => {
        window.localStorage.setItem('jwt', token);

        setAuthorizationToken(token);
        getUserDetails()
          .then((user) => {
            dispatch(setCurrentUser(user));
            errorDispatch(removeError());
          })
          .catch((error) => {
            errorDispatch(addError(error));
          });

        resolve();
      })
      .catch((error) => {
        console.log(error);
        errorDispatch(addError(error));
        reject();
      });
  });
}

export default authUser;
