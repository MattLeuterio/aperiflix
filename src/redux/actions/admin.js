import { createAsyncActionType } from './index';

export const GET_USERS_LIST = createAsyncActionType('admin', 'GET_USERS_LIST');
export const GET_PUBLISHERS_BY_ACCOUNT = createAsyncActionType(
  'admin',
  'GET_PUBLISHERS_BY_ACCOUNT'
);
export const ADD_PUBLISHER_TO_ACCOUNT = createAsyncActionType(
  'admin',
  'ADD_PUBLISHER_TO_ACCOUNT'
);
export const UPDATE_PUBLISHER_IN_ACCOUNT = createAsyncActionType(
  'admin',
  'UPDATE_PUBLISHER_IN_ACCOUNT'
);
export const REMOVE_PUBLISHER_FROM_ACCOUNT = createAsyncActionType(
  'admin',
  'REMOVE_PUBLISHER_FROM_ACCOUNT'
);
export const SWITCH_USER_TYPE = createAsyncActionType(
  'admin',
  'SWITCH_USER_TYPE'
);

export const USER_ADD = createAsyncActionType('admin', 'USER_ADD');
export const USER_EDIT = createAsyncActionType('admin', 'USER_EDIT');
export const DELETE_ACCOUNT = createAsyncActionType('admin', 'DELETE_ACCOUNT');
export const GET_AVAILABLE_PUBLISHER_BY_ACCOUNT = createAsyncActionType(
  'admin',
  'GET_AVAILABLE_PUBLISHER_BY_ACCOUNT'
);

// PUBLISHERS

export const GET_PUBLISHERS_LIST = createAsyncActionType(
  'admin',
  'GET_PUBLISHERS_LIST'
);

export const PUBLISHER_ADD = createAsyncActionType('admin', 'PUBLISHER_ADD');
export const PUBLISHER_EDIT = createAsyncActionType('admin', 'PUBLISHER_EDIT');

export const DELETE_PUBLISHER = createAsyncActionType(
  'admin',
  'DELETE_PUBLISHER'
);

export const GET_DEFAULT_TEMPLATE_BY_PUBLISHER = createAsyncActionType(
  'admin',
  'GET_DEFAULT_TEMPLATE_BY_PUBLISHER'
);

export const GET_SFTP_OPTIONS_BY_PUBLISHER = createAsyncActionType(
  'admin',
  'GET_SFTP_OPTIONS_BY_PUBLISHER'
);
