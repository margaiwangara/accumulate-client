import {
  SET_CURRENT_USER,
  REMOVE_CURRENT_USER,
  SEND_TWO_FACTOR_CODE,
  CONFIRM_TWO_FACTOR_CODE,
} from '../actionTypes';
import apiRequest, { setTokenHeader } from '@/services/api';
import { addError } from './error';

function setAuthorizationToken(token) {
  setTokenHeader(token);
}

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user,
});

export const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER,
});

export const set2faCode = (code, expiry) => ({
  type: SEND_TWO_FACTOR_CODE,
  code,
  expiry,
});

export const unset2faCode = () => ({
  type: CONFIRM_TWO_FACTOR_CODE,
});

function logoutUser(dispatch) {
  return new Promise((resolve, reject) => {
    if (window.localStorage.getItem('jwt')) {
      // clear localStorage
      window.localStorage.removeItem('jwt');
      dispatch(removeCurrentUser());
      resolve();
    }
  });
}

function send2faCode() {
  return new Promise((resolve, reject) => {
    return apiRequest('put', '/api/auth/two-factor')
      .then(({ code, expiration }) => {
        // store expiration in localStorage
        // window.localStorage.setItem("two_factor_expire", expiration);
        resolve({ code, expiration });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function confirm2faCode(code, dispatch) {
  return new Promise((resolve, reject) => {
    return apiRequest('post', '/api/auth/two-factor', { code })
      .then(() => {
        dispatch(unset2faCode());
        resolve();
      })
      .catch((error) => {
        dispatch(addError(error));
        reject();
      });
  });
}

function getUserDetails() {
  return new Promise((resolve, reject) => {
    return apiRequest('get', '/api/auth/account')
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
}

function authUser(dispatch, page, formValue, history) {
  const { authDispatch, errorDispatch } = dispatch;
  return new Promise((resolve, reject) => {
    return apiRequest('post', `/api/auth/${page}`, formValue)
      .then(({ token }) => {
        // if register or login // if login ?
        if (page === 'login') {
          // check if email if confirmed

          setAuthorizationToken(token);
          getUserDetails().then((userResponse) => {
            const { isEmailConfirmed, twoFactorEnable } = userResponse;
            console.log('isEmailConfirmed', isEmailConfirmed);
            console.log('twoFactorEnable', twoFactorEnable);
            if (!isEmailConfirmed) {
              const emailConfirmError = {
                message:
                  'Please confirm your email address to access your account',
              };

              errorDispatch(addError(emailConfirmError));
              return;
            }

            // if 2fa is enabled send 2fa code else set token and redirect to home
            if (twoFactorEnable) {
              send2faCode()
                .then(({ code, expiration }) => {
                  console.log('2faCodeSent. Yayyyy!');
                  authDispatch(set2faCode(code, expiration));

                  // set jwt token in localStorage
                  window.localStorage.setItem('jwt', token);
                  history.push('/two-factor');
                })
                .catch((error) => {
                  console.log('2faCodeError. Nayyyy!', error);
                  history.push('/login');
                });
            } else {
              // set jwt
              window.localStorage.setItem('jwt', token);
              // dispatch user details
              const { ...userDetails } = userResponse;
              authDispatch(setCurrentUser(userDetails));
              history.push('/');
            }
          });
        } else if (page === 'register') {
          history.push('/login');
        }
        resolve();
      })
      .catch((error) => {
        errorDispatch(addError(error));
        reject();
      });
  });
}

function forgotPassword(formData) {
  return new Promise((resolve, reject) => {
    return apiRequest('post', '/api/auth/forgotpassword', formData)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        console.log('forgotPasswordError', error);

        reject(error);
      });
  });
}

function resetPassword(queryData, formData) {
  return new Promise((resolve, reject) => {
    return apiRequest(
      'post',
      `/api/auth/resetpassword?token=${queryData}`,
      formData,
    )
      .then(() => {
        resolve();
      })
      .catch((error) => {
        console.log('resetPasswordError', error);
        reject(error);
      });
  });
}

export default authUser;
export {
  setAuthorizationToken,
  logoutUser,
  send2faCode,
  confirm2faCode,
  getUserDetails,
  forgotPassword,
  resetPassword,
};
