import {
  call, put, select, takeLatest
} from 'redux-saga/effects';

import { LOADER_CLOSE, LOADER_OPEN, MODAL_OPEN } from '../actions';
import {
  GET_DAILYMOTION_SEARCH_RESULTS,
  GET_HTML_BUILD_DM,
  GET_HTML_BUILD_YT,
  GET_YOUTUBE_SEARCH_RESULTS
} from '../actions/search';

import search from '../../api/search';
import { Toast } from '../../components';
import { getLabelValue } from '../../utils/common';

function* getYoutubeSearchResults(params) {
  const labels = yield select(state => state.app.selectedLabel);
  try {
    yield put({ type: LOADER_OPEN });
    const { data: { data = {} } = {} } = yield call(search.getYoutubeSearchResults, params.params);
    yield put({ type: GET_YOUTUBE_SEARCH_RESULTS._SUCCESS, data });
    if (data.length <= 0) {
      Toast.show(Toast.TYPE.INFO, `${getLabelValue('message_search_noresults', labels)}`);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > app > getPublishersByAccount', err);
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* getYoutubeSearchResultsWatch() {
  yield takeLatest(GET_YOUTUBE_SEARCH_RESULTS._REQUEST, getYoutubeSearchResults);
}

function* getHtmlBuildYT({ payload }) {
  try {
    const { videoId, body } = payload;
    yield put({ type: LOADER_OPEN });
    const { data: { data = {} } = {} } = yield call(search.getHtmlBuildYT, { videoId, body });
    yield put({ type: GET_HTML_BUILD_YT._SUCCESS, data });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > app > getPublishersByAccount', err);
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* getHtmlBuildYTWatch() {
  yield takeLatest(GET_HTML_BUILD_YT._REQUEST, getHtmlBuildYT);
}

// DAILYMOTION

function* getDailymotionSearchResults(params) {
  const labels = yield select(state => state.app.selectedLabel);
  try {
    yield put({ type: LOADER_OPEN });
    const { data: { data = {} } = {} } = yield call(search.getDailymotionSearchResults, params.params);
    yield put({ type: GET_DAILYMOTION_SEARCH_RESULTS._SUCCESS, data });
    if (data.length <= 0) {
      Toast.show(Toast.TYPE.INFO, `${getLabelValue('message_search_noresults', labels)}`);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > app > getPublishersByAccount', err);
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* getDailymotionSearchResultsWatch() {
  yield takeLatest(GET_DAILYMOTION_SEARCH_RESULTS._REQUEST, getDailymotionSearchResults);
}

function* getHtmlBuildDM({ payload }) {
  try {
    const { videoId, body } = payload;
    yield put({ type: LOADER_OPEN });
    const { data: { data = {} } = {} } = yield call(search.getHtmlBuildDM, { videoId, body });
    yield put({ type: GET_HTML_BUILD_DM._SUCCESS, data });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > app > getPublishersByAccount', err);
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* getHtmlBuildDMWatch() {
  yield takeLatest(GET_HTML_BUILD_DM._REQUEST, getHtmlBuildDM);
}


export default [
  getYoutubeSearchResultsWatch(),
  getHtmlBuildYTWatch(),
  getDailymotionSearchResultsWatch(),
  getHtmlBuildDMWatch()
];
