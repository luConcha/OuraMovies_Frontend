import axios from 'axios';

const BASE_URL = 'https://long-ruby-rabbit-coat.cyclic.app';
//const BASE_URL = 'http://localhost:5000';

const registerUserService = (data) =>
  axios.post(`${BASE_URL}/api/users/`, data);
const loginUserService = (data) =>
  axios.post(`${BASE_URL}/api/users/login`, data);

export { loginUserService, registerUserService };
