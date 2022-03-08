import {
  apiCall
} from './config';
import { shouldUseMock } from '../utils/common';
import { authLoginMock, authLogoutMock, authRefreshMock } from './mock/index';

const baseAuth = 'auth/';

export default {
  authLogin: (body) => {
    if (shouldUseMock()) {
      return authLoginMock();
    }
    return apiCall('token/login', 'POST', body);
  },
  authLogout: (body) => {
    if (shouldUseMock()) {
      return authLogoutMock();
    }
    return apiCall(`${baseAuth}logout`, 'POST', body);
  },
  authRefresh: (body) => {
    if (shouldUseMock()) {
      return authRefreshMock();
    }
    return apiCall('token/refresh', 'POST', body);
  }
};
