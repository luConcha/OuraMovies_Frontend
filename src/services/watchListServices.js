import axios from 'axios';

const BASE_URL = 'https://erin-courageous-duck.cyclic.app';
//const BASE_URL = 'http://localhost:5000';

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token ? `Bearer ${token}` : '';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const getWatchList = () => axios.get(`${BASE_URL}/api/watch`);
const addMovieToWatchList = (data) => axios.post(`${BASE_URL}/api/watch`, data);

export { getWatchList, addMovieToWatchList };
