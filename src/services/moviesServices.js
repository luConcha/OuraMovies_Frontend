import axios from 'axios';

const BASE_URL = 'https://vast-red-angelfish-kilt.cyclic.app';

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

const getAllMovies = () => axios.get(`${BASE_URL}/api/movies`);
const createMovie = (data) => axios.post(`${BASE_URL}/api/movies`, data);
const getMovieById = (id) => axios.get(`${BASE_URL}/api/movies/${id}`);
const movieLiked = (id) => axios.put(`${BASE_URL}/api/movies/liked/${id}`);
const updateMovie = (id) => axios.put(`${BASE_URL}/api/movies/${id}`);
const deleteMovie = (id) => axios.delete(`${BASE_URL}/api/movies/${id}`);

export {
  getAllMovies,
  createMovie,
  getMovieById,
  movieLiked,
  updateMovie,
  deleteMovie,
};
