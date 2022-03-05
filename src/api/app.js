import { apiCall } from './config';
import { shouldUseMock } from '../utils/common';
import { availablePlatformMock, publishersListAccountLoggedMock, getLabelsMock } from './mock/index';

export default {
  getPublishers: () => {
    if (shouldUseMock()) {
      return publishersListAccountLoggedMock();
    }
    return apiCall('publisher/account/list', 'GET');
  },
  getAvailablePlatform: () => {
    if (shouldUseMock()) {
      return availablePlatformMock();
    }
    return apiCall('publisher/available/platform', 'GET');
  },
  getLabels: () => {
    if (shouldUseMock()) {
      return getLabelsMock();
    }
    return apiCall('labels', 'GET');
  },
  setDefaultLanguage: (body) => {
    if (shouldUseMock()) {
      return getLabelsMock();
    }
    return apiCall('account/updatelanguage', 'POST', body);
  }
};
