import {
  dailySearchResultsMock, getHtmlBuildDMMock, getHtmlBuildYTMock, YoutubeSearchResultsMock
} from './mock/index';
import { apiCall } from './config';
import { parseQueryParams } from '../utils/queryParams';
import { shouldUseMock } from '../utils/common';

export default {
  getYoutubeSearchResults: params => {
    if (shouldUseMock()) {
      return YoutubeSearchResultsMock();
    }
    return apiCall(`yt/video/list${parseQueryParams(params)}`, 'GET');
  },
  getHtmlBuildYT: ({ videoId, body }) => {
    if (shouldUseMock()) {
      return getHtmlBuildYTMock();
    }
    return apiCall(`yt/${videoId}/player`, 'POST', body);
  },

  // DAILYMOTION
  getDailymotionSearchResults: params => {
    if (shouldUseMock()) {
      return dailySearchResultsMock();
    }
    return apiCall(`dm/video/list${parseQueryParams(params)}`, 'GET');
  },
  getHtmlBuildDM: ({ videoId, body }) => {
    if (shouldUseMock()) {
      return getHtmlBuildDMMock();
    }
    return apiCall(`dm/${videoId}/player`, 'POST', body);
  }
};
