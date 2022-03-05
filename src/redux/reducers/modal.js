import produce from 'immer';

import {
  MODAL_CLOSE, MODAL_OPEN
} from '../actions';
import { AUTH_LOGOUT } from '../actions/auth';

const initialState = {
  id: '',
  open: false,
  payload: {}
};

const modalReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case AUTH_LOGOUT._ERROR:
    case AUTH_LOGOUT._SUCCESS:
      draft = initialState;
      break;

    case MODAL_CLOSE: {
      draft = initialState;
      break;
    }

    case MODAL_OPEN: {
      if (action.id) {
        draft.id = action.id;
        draft.open = true;
        draft.payload = action.payload || {};
      }
      break;
    }

    default:
      return state;
  }
  return draft;
});

export default modalReducer;
