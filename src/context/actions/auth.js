import { SET_CURRENT_USER } from '../actionTypes';
import apiRequest from '@/services/api';

function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

function authUser(dispatch, path, payload) {
  return new Promise((resolve, reject) => {
    return apiRequest('post', `/api/auth/${path}`, payload)
      .then(({ token }) => {
        window.localStorage.setItem('jwt', token);

        dispatch(
          setCurrentUser({
            email: payload.email,
            name: payload.name,
            surname: payload.surname,
          }),
        );
        resolve();
      })
      .catch((error) => {
        console.log(error);

        reject();
      });
  });
}

export default authUser;
