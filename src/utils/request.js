import axios from 'axios';

const request = axios.create({
  baseURL: 'https://tclm-dev.hopto.org',
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

export default request;
