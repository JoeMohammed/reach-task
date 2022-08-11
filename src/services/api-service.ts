import axios from 'axios';

const apiKey = 'AIzaSyCfTnYLux9j_sUoK0zlXPcafZtlA3sorPE';

// Default configs
axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3/';
// axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.params['part'] = 'snippet';
// axios.defaults.params['maxResults'] = '10';
// axios.defaults.params['key'] = apiKey;
axios.defaults.params = {
  part: 'snippet',
  maxResults: '10',
  key: apiKey,
};

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
