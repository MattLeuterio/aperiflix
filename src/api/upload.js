import { YoutubeSearchResultsMock, ytPlaylistPublisherMock } from './mock/index';
import { apiCall, basePrivate } from './config';
import { shouldUseMock } from '../utils/common';
import { parseQueryParams } from '../utils/queryParams';

export default {
  uploadVideo: body => {
    if (shouldUseMock()) {
      return YoutubeSearchResultsMock();
    }
    return apiCall('video/upload', 'PUT', body);
  },
  getYtPlaylistPublisher: params => {
    if (shouldUseMock()) {
      return ytPlaylistPublisherMock();
    }
    return apiCall(`yt/playlist/list${parseQueryParams(params)}`, 'GET');
  }
};
