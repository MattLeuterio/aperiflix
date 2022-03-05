import moment from 'moment';
import { shouldUseMock } from './common';
import storage from './storage';
import { AuthStorage } from '../redux/reducers/auth';
import auth from '../api/auth';

const CheckTokenClock = shouldUseMock() ? 5000 : 240000;

export const cleanToken = () => {
  storage.clearKey(AuthStorage);
};

const errorStatement = (err = 'Generic error') => {
  // eslint-disable-next-line no-console
  console.error('Something goes wrong refreshing the token, user must login again', err);
  cleanToken();
};

const isValidToken = ({ timestamp = moment().valueOf(), expires_in: expiresIn = 3600 } = {}, deltaMinutes = 10) => moment().diff(moment(Number(timestamp)), 'minutes') < (moment.duration(expiresIn * 1000).asMinutes() - deltaMinutes);

let keepTokenAliveInterval;
export const dismissKeepTokenAlive = () => clearInterval(keepTokenAliveInterval);
const keepTokenAlive = (token) => {
  if (keepTokenAliveInterval) dismissKeepTokenAlive();
  keepTokenAliveInterval = setInterval(() => {
    // eslint-disable-next-line no-console
    if (!isValidToken(token)) {
      auth.authRefresh()
        .then(res => {
          const { data: { data = {} } = {} } = res;
          // eslint-disable-next-line no-use-before-define
          setToken(data);
        });
    }
  }, CheckTokenClock);
};

export const setToken = (value) => {
  try {
    const newValue = { ...value, timestamp: moment().valueOf() };
    storage.write(AuthStorage, newValue);
    keepTokenAlive(newValue);
  } catch (err) {
    errorStatement(err);
  }
};

// eslint-disable-next-line consistent-return
const validateToken = token => {
  if (typeof token === 'object' && token !== null) {
    return isValidToken(token) ? token : null;
  }
  return null;
};

// eslint-disable-next-line consistent-return
const getTokenFlow = (token) => {
  try {
    if (token) return validateToken(token);
    return {};
  } catch (err) {
    errorStatement(err);
  }
};

export const getToken = () => getTokenFlow(storage.read(AuthStorage)?.value);

export const initializeToken = () => {
  const token = getToken();
  if(token) {
    const { timestamp, expires_in: expiresIn, token: accessToken } = token;
    if (timestamp && expiresIn && accessToken) {
      if (isValidToken(token)) {
        keepTokenAlive(token);
      } else {
        errorStatement();
      }
    }
  } else {
    errorStatement();
  }
};
initializeToken();
