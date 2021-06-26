import { GET_ARTICLES, GET_ARTICLE } from '../actionTypes';
import apiRequest from '@/services/api';
import { addError, removeError } from './error';

export const loadArticles = (data) => ({
  type: GET_ARTICLES,
  ...data,
});

export const loadArticle = (data) => ({
  type: GET_ARTICLE,
  data,
});

export const fetchArticles = (dispatch, errorDispatch, limit = 5) => {
  return new Promise((resolve, reject) => {
    return apiRequest('get', `/api/articles?limit=${limit}&sort=-datePublished`)
      .then(({ success, ...res }) => {
        dispatch(loadArticles({ ...res }));
        errorDispatch(removeError());

        resolve();
      })
      .catch((error) => {
        errorDispatch(addError(error));
        reject();
      });
  });
};

export const fetchArticle = (dispatch, errorDispatch, link) => {
  return new Promise((resolve, reject) => {
    return apiRequest('get', `/api/articles/${link}`)
      .then((res) => {
        dispatch(loadArticle(res));
        errorDispatch(removeError());
        resolve();
      })
      .catch((error) => {
        console.log(error);
        errorDispatch(addError(error));
        reject();
      });
  });
};
