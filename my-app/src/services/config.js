import axios from 'axios';

const api = axios.create({
  baseURL: 'https://celtic-descent-390210.lm.r.appspot.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default api