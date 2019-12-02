import axios from 'axios';

const request = axios.create({
  baseURL: 'http://5ccfdec25b71f40014dc102e.mockapi.io/api/products',
});

request.interceptors.request.use(
  async config => {},
  error => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// request.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

export default request;
