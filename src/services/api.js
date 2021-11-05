import axios from 'axios';
import { BASE_URL_PROD, BASE_URL_DEV } from '@/utils/env';

export const setTokenHeader = (token) => {
  if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else delete axios.defaults.headers.common['Authorization'];
};

const baseUrl =
  process.env.NODE_ENV === 'development' ? `${BASE_URL_DEV}` : BASE_URL_PROD;

function apiRequest(method, path, payload) {
  return new Promise((resolve, reject) => {
    return axios[method.toLowerCase()](`${baseUrl}${path}`, payload)
      .then((res) => {
        const data =
          typeof res.data === 'string'
            ? JSON.parse(JSON.stringify(res.data))
            : res.data;
        resolve(data);
      })
      .catch((error) => reject(error.response.data.error));
  });
}

export default apiRequest;
