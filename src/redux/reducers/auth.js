import produce from 'immer';

import { LOCATION_CHANGE } from 'redux-first-history';
import { AUTH_LOGIN, AUTH_LOGOUT } from '../actions/auth';
import { shouldUseMock } from '../../utils/common';
import { setToken } from '../../utils/token';
import storage from '../../utils/storage';
import { APP_STORE_RELOAD } from '../actions';

export const AuthStorage = 'Auth';

const initialState = {
  // eslint-disable-next-line
  isLogged: shouldUseMock() ? true : false,
  error: {},
  user_data: {
    name: '',
    surname: '',
    username: ''
  }
};

const authReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case LOCATION_CHANGE:
    case APP_STORE_RELOAD: {
      draft.isLogged = !!storage.read(AuthStorage)?.value?.token;
      draft.user_data = {
        ...state.user_data,
        name: storage.read(AuthStorage)?.value?.user_data?.name,
        surname: storage.read(AuthStorage)?.value?.user_data?.surname,
        username: storage.read(AuthStorage)?.value?.user_data?.username,
        type: storage.read(AuthStorage)?.value?.user_data?.type,
        defaultLanguage: storage.read(AuthStorage)?.value?.user_data?.defaultLanguage
      };
      break;
    }

    case AUTH_LOGOUT._ERROR:
    case AUTH_LOGOUT._SUCCESS:
      draft = initialState;
      storage.clearAll();
      break;

    case AUTH_LOGIN._SUCCESS: {
      const { data } = action;

      setToken(data);
      draft.isLogged = true;
      draft.error = initialState.error;
      draft.user_data = {
        username: data?.user_data?.username,
        name: data?.user_data?.name,
        surname: data?.user_data?.surname,
        type: data?.user_data?.type
      };
      break;
    }

    case AUTH_LOGIN._ERROR: {
      const { data = {} } = action;

      draft.error = {
        ...state.error,
        message: data?.message || 'Unexpected error'
      };
      draft.isLogged = false;
      storage.clearAll();
      break;
    }

    default:
      break;
  }
});

export default authReducer;
