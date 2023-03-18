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

export const getCurrent = async token => {
  try {
    setToken(token);
    const response = await instance.get('/users/current');
    return response.data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logout = async () => {
  const response = await instance.post('/users/logout');
  setToken();
  return response;
};
