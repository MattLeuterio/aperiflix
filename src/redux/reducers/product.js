import produce from 'immer';

import { GET_PRODUCT_DETAILS, GET_PRODUCT_VIDEO, RESET_PRODUCT_DETAILS, SET_PRODUCTS } from '../actions/product';

const initialState = {
  productsList: [],
  productSelectedDetails: {},
  productSelectedVideo: []
};

const appReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case SET_PRODUCTS: {
      draft.productsList = action.products;
      break;
    }
    case RESET_PRODUCT_DETAILS: {
      draft.productSelectedDetails = initialState.productSelectedDetails;
      draft.productSelectedVideo = initialState.productSelectedVideo;
      break;
    }
    case GET_PRODUCT_DETAILS._SUCCESS: {
      const { data } = action;
      draft.productSelectedDetails = data;
      break;
    }
    case GET_PRODUCT_VIDEO._SUCCESS: {
      const { data } = action;
      draft.productSelectedVideo = data.results;
      break;
    }

    default:
      return state;
  }
  return draft;
});

export default appReducer;
