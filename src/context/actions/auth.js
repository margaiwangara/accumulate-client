import { SET_CURRENT_USER } from '../actionTypes';
import apiRequest, { setTokenHeader } from '@/services/api';
import { addError, removeError } from './error';

function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export const setAuthorizationToken = (token) => setTokenHeader(token);

export const getUserDetails = () => {
  return new Promise((resolve, reject) => {
    return apiRequest('get', '/api/auth/account')
      .then(({ data }) => resolve(data))
      .catch((error) => reject(error));
  });
};

function authUser(dispatch, path, payload) {
  return new Promise((resolve, reject) => {
    return apiRequest('post', `/api/auth/${path}`, payload)
      .then(({ token }) => {
        window.localStorage.setItem('jwt', token);

        setAuthorizationToken(token);
        getUserDetails()
          .then((user) => {
            dispatch(setCurrentUser(user));
            removeError();
          })
          .catch((error) => {
            addError(error);
          });

        resolve();
      })
      .catch((error) => {
        console.log(error);
        addError(error);
        reject();
      });
  });
}

export default authUser;
