import produce from 'immer';
import { LOCATION_CHANGE } from 'redux-first-history';

import {
  LOADER_OPEN,
  LOADER_CLOSE,
  APP_GLOBAL_OVERLAY_TOGGLE,
  GET_PUBLISHERS,
  SET_SELECTED_PUBLISHERS,
  GET_AVAILABLE_PLATFORM, GET_LABELS, SET_SELECTED_LABELS
} from '../actions';
import { AUTH_LOGOUT, AUTH_LOGIN } from '../actions/auth';

import { Toast } from '../../components';
import storage from '../../utils/storage';
import { setToken } from '../../utils/token';
import { SET_PRODUCTS } from '../actions/product';

const initialState = {
  productsList: [],
};

const appReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {

    case SET_PRODUCTS: {
      console.log('action.products', action)
      draft.productsList = action.products;
      break;
    }

    default:
      return state;
  }
  return draft;
});

export default appReducer;
