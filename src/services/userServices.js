import axios from 'axios';

const BASE_URL = 'https://vast-red-angelfish-kilt.cyclic.app';

const registerUserService = (data) =>
  axios.post(`${BASE_URL}/api/users/`, data);
const loginUserService = (data) =>
  axios.post(`${BASE_URL}/api/users/login`, data);

export { loginUserService, registerUserService };
