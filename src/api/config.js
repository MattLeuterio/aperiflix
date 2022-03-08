import axios from 'axios';
import { getToken } from '../utils/token';

// const isLocalHost = window.location.hostname === 'localhost';
const isLocalHost = false;

// TODO tmp for DEV purposes - remove me before TEST/PROD
// eslint-disable-next-line no-unused-vars

export const apiHost = 'https://api.themoviedb.org/';

const axiosApi = axios.create({
  // withCredentials: true
  // headers: {
  //   'Content-Type': 'application/json'
  // }
});

/*axiosApi.interceptors.request.use(req => {
  const { token } = getToken();
  if (token) req.headers.Authorization = `bearer ${token}`;
  return req;
});*/

export function apiCall(url, method, body = null, options = null, direct = false) {
  if (method.toLowerCase() === 'delete') return axiosApi[method.toLowerCase()](`${apiHost}${url}`, { data: body, options });
  return axiosApi[method.toLowerCase()](`${apiHost}${url}`, body, options);
}
