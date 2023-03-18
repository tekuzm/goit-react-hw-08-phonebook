import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const signup = async data => {
  const response = await instance.post('/users/signup', data);
  setToken(response.data.token);

  return response;
};

export const login = async data => {
  const response = await instance.post('/users/login', data);
  setToken(response.data.token);

  return response;
};
