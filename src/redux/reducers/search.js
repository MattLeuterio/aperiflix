import produce from 'immer';
import { SET_SELECTED_PUBLISHERS } from '../actions';
import { AUTH_LOGOUT } from '../actions/auth';
import {
  GET_DAILYMOTION_SEARCH_RESULTS, GET_HTML_BUILD_DM, GET_HTML_BUILD_YT, GET_YOUTUBE_SEARCH_RESULTS, RESET_DAILYMOTION_SEARCH_RESULTS, RESET_YOUTUBE_SEARCH_RESULTS
} from '../actions/search';

const initialState = {
  youtubeSearchResults: [],
  htmlBuildYT: '',
  dailymotionSearchResults: [],
  htmlBuildDM: ''
};

const adminReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case SET_SELECTED_PUBLISHERS:
    case AUTH_LOGOUT._ERROR:
    case AUTH_LOGOUT._SUCCESS:
      draft = initialState;
      break;

    case GET_YOUTUBE_SEARCH_RESULTS._SUCCESS: {
      const list = action.data;
      draft.youtubeSearchResults = list;

      break;
    }

    case RESET_YOUTUBE_SEARCH_RESULTS: {
      draft.youtubeSearchResults = initialState.youtubeSearchResults;
      break;
    }

    case GET_HTML_BUILD_YT._SUCCESS: {
      const html = action.data;
      draft.htmlBuildYT = html;
      break;
    }

    case GET_DAILYMOTION_SEARCH_RESULTS._SUCCESS: {
      const list = action.data;
      draft.dailymotionSearchResults = list;

      break;
    }

    case RESET_DAILYMOTION_SEARCH_RESULTS: {
      draft.dailymotionSearchResults = initialState.dailymotionSearchResults;
      break;
    }

    case GET_HTML_BUILD_DM._SUCCESS: {
      const html = action.data;
      draft.htmlBuildDM = html;
      break;
    }

    default:
      return state;
  }
  return draft;
});

export default adminReducer;
