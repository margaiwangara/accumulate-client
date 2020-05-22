import axios from 'axios';

export const setTokenHeader = (token) => {
  if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else delete axios.defaults.headers.common['Authorization'];
};

// axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     return Promise.reject(error);
//   },
// );

function apiRequest(method, path, payload) {
  return new Promise((resolve, reject) => {
    return axios[method.toLowerCase()](path, payload)
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
