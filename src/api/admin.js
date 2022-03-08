import {
  addPublisherToAccountMock,
  publishersListByAccountMock,
  removePublisherFromAccountMock,
  switchUserTypeMock,
  updatePublisherInAccountMock,
  userListMock,
  publishersListMock,
  AddpublisherMock,
  getAvailablePublisherByAccountMock,
  EditPublisherMock,
  getDefaultTemplateByPublisherMock,
  getSftpOptionsByPublisherMock
} from './mock/index';
import { apiCall, basePrivate } from './config';
import { parseQueryParams } from '../utils/queryParams';
import { shouldUseMock } from '../utils/common';
import { getContent } from '../contentful';

const baseUserList = 'publisher/user-list';

export default {
  // USER
  getUserList: () => {
    if (shouldUseMock()) {
      return userListMock();
    }
    return apiCall('account/list', 'GET');
  },
  addUser: body => {
    if (shouldUseMock()) {
      return userListMock(body);
    }
    return apiCall('account/create', 'PUT', body);
  },
  editUser: body => {
    if (shouldUseMock()) {
      return userListMock(body);
    }
    return apiCall('account/update', 'POST', body);
  },
  getPublishersByAccount: params => {
    if (shouldUseMock()) {
      return publishersListByAccountMock();
    }
    return apiCall(`account/publisher/list${parseQueryParams(params)}`, 'GET');
  },
  addPublisherToAccount: body => {
    if (shouldUseMock()) {
      return addPublisherToAccountMock();
    }
    return apiCall('account/publisher/add', 'POST', body);
  },
  updatePublisherInAccount: body => {
    if (shouldUseMock()) {
      return updatePublisherInAccountMock();
    }
    return apiCall('account/publisher/update', 'POST', body);
  },
  removePublisherFromAccount: body => {
    if (shouldUseMock()) {
      return removePublisherFromAccountMock();
    }
    return apiCall('account/publisher/delete', 'POST', body);
  },
  deleteAccount: body => {
    if (shouldUseMock()) {
      return addPublisherToAccountMock();
    }
    return apiCall('account/delete', 'DELETE', body);
  },
  switchUserType: body => {
    if (shouldUseMock()) {
      return switchUserTypeMock();
    }
    return apiCall('account/switch', 'POST', body);
  },
  getAvailablePublisherByAccount: params => {
    if (shouldUseMock()) {
      return getAvailablePublisherByAccountMock();
    }
    return apiCall(
      `publisher/account/available${parseQueryParams(params)}`,
      'GET'
    );
  },

  // PUBLISHER
  getPublishersList: () => {
    if (shouldUseMock()) {
      return publishersListMock();
    }
    return apiCall('publisher/list', 'GET');
  },
  addPublisher: body => {
    if (shouldUseMock()) {
      return AddpublisherMock();
    }
    return apiCall('publisher/create', 'PUT', body);
  },
  editPublisher: body => {
    if (shouldUseMock()) {
      return EditPublisherMock();
    }
    return apiCall('publisher/update', 'POST', body);
  },
  deletePublisher: body => {
    if (shouldUseMock()) {
      return addPublisherToAccountMock();
    }
    return apiCall('publisher/delete', 'DELETE', body);
  },
  getDefaultTemplateByPublisher: params => {
    if (shouldUseMock()) {
      return getDefaultTemplateByPublisherMock();
    }
    return apiCall(
      `publisher/default/template${parseQueryParams(params)}`,
      'GET'
    );
  },
  getSftpOptionsByPublisher: params => {
    if (shouldUseMock()) {
      return getSftpOptionsByPublisherMock();
    }
    return apiCall(`publisher/upload/server/options${parseQueryParams(params)}`, 'GET');
  }
};
