import axios from 'axios';
import moment from 'moment';
import { getToken } from '../utils/token';

// const isLocalHost = window.location.hostname === 'localhost';
const isLocalHost = false;

// TODO tmp for DEV purposes - remove me before TEST/PROD
// eslint-disable-next-line no-unused-vars
const DevLocal = 'http://f157f6ebe3f0.eu.ngrok.io/api/';

const ENV_BASE_URL = {
  DEV: DevLocal,
  TEST: `${window.location.protocol}/api/`,
  PRE_PROD: null,
  PROD: `${window.location.protocol}/api/`,
  DEFAULT: `${window.location.origin}/api/`
};

const APP_DEPLOY_ENV = (process.env.REACT_APP_DEPLOY_ENV) ? process.env.REACT_APP_DEPLOY_ENV.trim() : process.env.REACT_APP_DEPLOY_ENV;
export const apiHost = ENV_BASE_URL[APP_DEPLOY_ENV] || ENV_BASE_URL.DEFAULT;

export const basePublic = 'public/';
export const basePrivate = 'private/';

const checkForLocalhostRules = (url = '', direct = false) => {
  if (direct) return url;

  if (isLocalHost) {
    const baseUrl = `http://${window.location.hostname}`;
    const port = '2222';
    return `${baseUrl}${port}/api${url}`;
  }

  return `${apiHost}${url}`;
};

const axiosApi = axios.create({
  // withCredentials: true
  // headers: {
  //   'Content-Type': 'application/json'
  // }
});

axiosApi.interceptors.request.use(req => {
  const { token } = getToken();
  if (token) req.headers.Authorization = `bearer ${token}`;
  return req;
});

export function apiCall(url, method, body = null, options = null, direct = false) {
  if(method.toLowerCase() === 'delete') return axiosApi[method.toLowerCase()](checkForLocalhostRules(url, direct), {data: body, options});
  return axiosApi[method.toLowerCase()](checkForLocalhostRules(url, direct), body, options);
}
