import produce from 'immer';
import {
  SET_FILTER_BY_TITLE,
  SET_FILTERS_CLOSE,
  SET_FILTERS_OPEN, SET_GENRE, SET_ORDER,
  SET_PRODUCT_TYPE
} from '../actions/filters';

const initialState = {
  filtersOpen: false,
  productType: 'all',
  filterByTitle: '',
  genreSelected: '',
  orderSelected: ''
};

const filtersReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {

    case SET_FILTERS_OPEN: {
      draft.filtersOpen = true;
      break;
    }

    case SET_FILTERS_CLOSE: {
      draft.filtersOpen = initialState.filtersOpen;
      break;
    }
    case SET_PRODUCT_TYPE: {
      draft.productType = action.prodType;
      break;
    }
    case SET_FILTER_BY_TITLE: {
      draft.filterByTitle = action.searchValue;
      break;
    }
    case SET_GENRE: {
      draft.genreSelected = action.genre;
      break;
    }
    case SET_ORDER: {
      draft.orderSelected = action.order;
      break;
    }

    default:
      return state;
  }
  return draft;
});

export default filtersReducer;
