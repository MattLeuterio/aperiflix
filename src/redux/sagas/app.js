import {
  put, takeLatest, select, call
} from 'redux-saga/effects';
import { push } from 'redux-first-history';

import { MENU_SET_SECTION } from '../actions/menu';
import {
  LOADER_CLOSE,
  LOADER_OPEN,
  GET_PUBLISHERS,
  GET_AVAILABLE_PLATFORM, GET_LABELS, SET_SELECTED_LABELS
} from '../actions';
import {
  GET_PUBLISHERS_BY_ACCOUNT
} from '../actions/admin';
import app from '../../api/app';
import admin from '../../api/admin';

function* menuSetSection({ section: { route } = {}, toRedirect = false }) {
  try {
    if (toRedirect) yield put(push(route));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > app > menuSetSection', err);
  }
}

function* menuSetSectionWatch() {
  yield takeLatest(MENU_SET_SECTION, menuSetSection);
}

function* getLabels() {
  try {
    const { data: { data = {} } = {} } = yield call(app.getLabels);
    yield put({ type: GET_LABELS._SUCCESS, data });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > app > getLabels', err);
  }
}

function* getLabelsWatch() {
  yield takeLatest(GET_LABELS._REQUEST, getLabels);
}

function* setLabels({ label }) {
  try {
    yield call(app.setDefaultLanguage, { defaultLanguage: label });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > app > setLabels', err);
  }
}

function* setLabelsWatch() {
  yield takeLatest(SET_SELECTED_LABELS, setLabels);
}

function* getPublishers() {
  try {
    yield put({ type: LOADER_OPEN });
    const { user_data: { type = '' } = {} } = yield select(state => state.auth);
    const publishersList = type === 'member' ? yield call(app.getPublishers) : yield call(admin.getPublishersList);
    yield put({ type: GET_PUBLISHERS._SUCCESS, publishersList });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > app > getPublishers', err);
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* getPublishersWatch() {
  yield takeLatest(GET_PUBLISHERS._REQUEST, getPublishers);
}

function* getPublishersByAccount({ username }) {
  try {
    yield put({ type: LOADER_OPEN });
    const publishersList = yield call(admin.getPublishersByAccount, { username });
    yield put({ type: GET_PUBLISHERS_BY_ACCOUNT._SUCCESS, publishersList });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > app > getPublishersByAccount', err);
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* getPublishersByAccountWatch() {
  yield takeLatest(GET_PUBLISHERS_BY_ACCOUNT._REQUEST, getPublishersByAccount);
}

function* getAvailablePlatform() {
  try {
    yield put({ type: LOADER_OPEN });
    const availablePlatformList = yield call(app.getAvailablePlatform);
    yield put({ type: GET_AVAILABLE_PLATFORM._SUCCESS, availablePlatformList });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > app > getPublishers', err);
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* getAvailablePlatformWatch() {
  yield takeLatest(GET_AVAILABLE_PLATFORM._REQUEST, getAvailablePlatform);
}


export default [
  menuSetSectionWatch(),
  getPublishersWatch(),
  getPublishersByAccountWatch(),
  getAvailablePlatformWatch(),
  getLabelsWatch(),
  setLabelsWatch()
];
