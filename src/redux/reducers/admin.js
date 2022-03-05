import produce from 'immer';
import {
  GET_AVAILABLE_PUBLISHER_BY_ACCOUNT,
  GET_DEFAULT_TEMPLATE_BY_PUBLISHER,
  GET_PUBLISHERS_BY_ACCOUNT,
  GET_PUBLISHERS_LIST,
  GET_SFTP_OPTIONS_BY_PUBLISHER,
  GET_USERS_LIST
} from '../actions/admin';

export const ClientsFiltersStorage = 'ClientsFiltersStorage';
export const ClientsFiltersStorageType = 'ClientsFiltersStorageType';

const initialState = {
  userList: undefined,
  publishersList: undefined,
  selectedUserPublisher: [],
  availablePublisherByAccount: undefined,
  defaultTemplateByPublisher: undefined,
  availablePlatformList: [],
  sftpOptionsByPublisher: {}
};

const adminReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    // USERS
    case GET_USERS_LIST._SUCCESS: {
      const list = action.data;
      draft.userList = list;
      break;
    }

    case GET_PUBLISHERS_BY_ACCOUNT._SUCCESS: {
      const list = action.publishersList.data.data.result;
      // eslint-disable-next-line prefer-destructuring
      draft.selectedUserPublisher = list;
      break;
    }

    case GET_AVAILABLE_PUBLISHER_BY_ACCOUNT._SUCCESS: {
      const list = action.result;
      draft.availablePublisherByAccount = list;
      break;
    }

    // PUBLISHERS
    case GET_PUBLISHERS_LIST._SUCCESS: {
      const list = action.data.result;
      draft.publishersList = list;
      break;
    }

    case GET_DEFAULT_TEMPLATE_BY_PUBLISHER._SUCCESS: {
      const list = action.result;
      draft.defaultTemplateByPublisher = list;
      break;
    }

    case GET_SFTP_OPTIONS_BY_PUBLISHER._SUCCESS: {
      const list = action.result;
      draft.sftpOptionsByPublisher = list;
      break;
    }

    default:
      return state;
  }
  return draft;
});

export default adminReducer;
