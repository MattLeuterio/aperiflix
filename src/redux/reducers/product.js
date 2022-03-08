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
import { GET_PRODUCT_DETAILS, GET_PRODUCT_VIDEO, SET_PRODUCTS } from '../actions/product';

const initialState = {
  productsList: [],
  productSelectedDetails: [],
  productSelectedVideo: []
};

const appReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case SET_PRODUCTS: {
      draft.productsList = action.products;
      break;
    }
    case GET_PRODUCT_DETAILS._SUCCESS: {
      const { data } = action;
      console.log('data reduce', action);
      draft.productSelectedDetails = data;
      break;
    }
    case GET_PRODUCT_VIDEO._SUCCESS: {
      const { data } = action;
      console.log('data reduce', action);
      draft.productSelectedVideo = data.results;
      break;
    }

    default:
      return state;
  }
  return draft;
});

export default appReducer;
