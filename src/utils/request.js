import axios from 'axios';

const request = axios.create({
  baseURL: 'https://tclm-dev.hopto.org',
  //baseURL: 'https://5ccfdec25b71f40014dc102e.mockapi.io/api',
});

request.interceptors.request.use(
  async config => {
    config.headers = {
      'Content-Type': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
request.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            return Promise.reject(error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            return Promise.reject(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            return Promise.reject(error);
        }
    },
);

export default request;
