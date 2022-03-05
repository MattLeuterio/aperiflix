import { createAsyncActionType } from './index';

export const GET_YOUTUBE_SEARCH_RESULTS = createAsyncActionType(
  'search',
  'GET_YOUTUBE_SEARCH_RESULTS'
);

export const RESET_YOUTUBE_SEARCH_RESULTS = '@@search/RESET_YOUTUBE_SEARCH_RESULTS';


export const GET_HTML_BUILD_YT = createAsyncActionType(
  'search',
  'GET_HTML_BUILD_YT'
);

export const GET_DAILYMOTION_SEARCH_RESULTS = createAsyncActionType(
  'search',
  'GET_DAILYMOTION_SEARCH_RESULTS'
);

export const RESET_DAILYMOTION_SEARCH_RESULTS = '@@search/RESET_DAILYMOTION_SEARCH_RESULTS';

export const GET_HTML_BUILD_DM = createAsyncActionType(
  'search',
  'GET_HTML_BUILD_DM'
);
