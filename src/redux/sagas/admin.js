import {
  call, put, select, takeLatest
} from 'redux-saga/effects';

import {
  GET_AVAILABLE_PLATFORM, GET_PUBLISHERS, LOADER_CLOSE, LOADER_OPEN, MODAL_OPEN
} from '../actions';
import {
  USER_ADD,
  GET_USERS_LIST,
  ADD_PUBLISHER_TO_ACCOUNT,
  GET_PUBLISHERS_BY_ACCOUNT,
  UPDATE_PUBLISHER_IN_ACCOUNT,
  REMOVE_PUBLISHER_FROM_ACCOUNT,
  DELETE_ACCOUNT,
  USER_EDIT,
  SWITCH_USER_TYPE,
  GET_PUBLISHERS_LIST,
  DELETE_PUBLISHER,
  GET_AVAILABLE_PUBLISHER_BY_ACCOUNT,
  PUBLISHER_ADD,
  PUBLISHER_EDIT,
  GET_DEFAULT_TEMPLATE_BY_PUBLISHER,
  GET_SFTP_OPTIONS_BY_PUBLISHER
} from '../actions/admin';

import admin from '../../api/admin';
import { Toast } from '../../components';
import { getLabelValue } from '../../utils/common';

function* getUserList() {
  try {
    yield put({ type: LOADER_OPEN });

    const { data: { data = {} } = {} } = yield call(admin.getUserList);
    yield put({ type: GET_USERS_LIST._SUCCESS, data });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > admin > getUserList', err);
    const message = err?.response?.data?.data === 'MAXIMUM_LOOKUP_RESULTS_ERROR'
      ? err?.response?.data?.data
      : 'Si è verificato un errore';
    yield put({ type: GET_USERS_LIST._ERROR, err: { message } });
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* getUserListWatch() {
  yield takeLatest(GET_USERS_LIST._REQUEST, getUserList);
}

function* userAdd({ body }) {
  const labels = yield select(state => state.app.selectedLabel);
  try {
    yield put({ type: LOADER_OPEN });
    const { data: { data: { user_id } = {} } = {} } = yield call(
      admin.addUser,
      body
    );
    yield put({ type: USER_ADD._SUCCESS });
    yield put({ type: GET_USERS_LIST._REQUEST });
    Toast.show(Toast.TYPE.SUCCESS, `${body.username} ${getLabelValue('message_created_successfully', labels)}`);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > admin > userAdd', err);
    Toast.show(Toast.TYPE.ERROR, `${getLabelValue('message_general_error', labels)}`);
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* userAddWatch() {
  yield takeLatest(USER_ADD._REQUEST, userAdd);
}

function* userEdit({ body }) {
  const labels = yield select(state => state.app.selectedLabel);
  try {
    yield put({ type: LOADER_OPEN });
    yield call(admin.editUser, body);
    yield put({ type: USER_EDIT._SUCCESS });
    yield put({ type: GET_USERS_LIST._REQUEST });
    Toast.show(Toast.TYPE.SUCCESS, `${body.username} ${getLabelValue('message_updated_successfully', labels)}`);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > admin > userEdit', err);
    Toast.show(Toast.TYPE.ERROR, `${getLabelValue('message_general_error', labels)}`);
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* userEditWatch() {
  yield takeLatest(USER_EDIT._REQUEST, userEdit);
}

function* deleteAccount() {
  const labels = yield select(state => state.app.selectedLabel);
  try {
    yield put({ type: LOADER_OPEN });
    const {
      payload: { username = '' }
    } = yield select(state => state.modal);
    yield call(admin.deleteAccount, { username });
    yield put({ type: DELETE_ACCOUNT._SUCCESS });
    yield put({ type: GET_USERS_LIST._REQUEST });
    Toast.show(Toast.TYPE.SUCCESS, `${username} ${getLabelValue('message_deleted_successfully', labels)}`);
  } catch (err) {
    // eslint-disable-next-line no-console
    yield put({ type: DELETE_ACCOUNT._ERROR });
    Toast.show(Toast.TYPE.ERROR, `${getLabelValue('message_general_error', labels)}`);
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* deleteAccountWatch() {
  yield takeLatest(DELETE_ACCOUNT._REQUEST, deleteAccount);
}

function* addPublisherToAccount({ body }) {
  const labels = yield select(state => state.app.selectedLabel);
  try {
    yield put({ type: LOADER_OPEN });
    yield call(admin.addPublisherToAccount, body);
    yield put({ type: ADD_PUBLISHER_TO_ACCOUNT._SUCCESS });
    yield put({
      type: GET_PUBLISHERS_BY_ACCOUNT._REQUEST,
      username: body.username
    });
    yield put({
      type: GET_AVAILABLE_PUBLISHER_BY_ACCOUNT._REQUEST,
      username: body.username
    });
    yield put({ type: GET_USERS_LIST._REQUEST });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > admin > addPublisherToAccount', err);
    Toast.show(Toast.TYPE.ERROR, `${getLabelValue('message_general_error', labels)}`);
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* addPublisherToAccountWatch() {
  yield takeLatest(ADD_PUBLISHER_TO_ACCOUNT._REQUEST, addPublisherToAccount);
}

function* updatePublisherInAccount({ body }) {
  const labels = yield select(state => state.app.selectedLabel);
  try {
    yield put({ type: LOADER_OPEN });
    yield call(admin.updatePublisherInAccount, body);
    yield put({ type: UPDATE_PUBLISHER_IN_ACCOUNT._SUCCESS });
    Toast.show(Toast.TYPE.SUCCESS, `${body.publisher[0].name} ${getLabelValue('message_updated_successfully', labels)}`);
    yield put({
      type: GET_PUBLISHERS_BY_ACCOUNT._REQUEST,
      username: body.username
    });
    yield put({ type: GET_USERS_LIST._REQUEST });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > admin > addPublisherToAccount', err);
    Toast.show(Toast.TYPE.ERROR, `${getLabelValue('message_general_error', labels)}`);
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* updatePublisherInAccountWatch() {
  yield takeLatest(
    UPDATE_PUBLISHER_IN_ACCOUNT._REQUEST,
    updatePublisherInAccount
  );
}

function* removePublisherFromAccount({ body }) {
  const labels = yield select(state => state.app.selectedLabel);
  try {
    yield put({ type: LOADER_OPEN });
    yield call(admin.removePublisherFromAccount, body);
    yield put({ type: REMOVE_PUBLISHER_FROM_ACCOUNT._SUCCESS });
    Toast.show(Toast.TYPE.SUCCESS, `${body.publisher[0]} ${getLabelValue('message_deleted_successfully', labels)}`);
    yield put({
      type: GET_PUBLISHERS_BY_ACCOUNT._REQUEST,
      username: body.username
    });
    yield put({
      type: GET_AVAILABLE_PUBLISHER_BY_ACCOUNT._REQUEST,
      username: body.username
    });
    yield put({ type: GET_USERS_LIST._REQUEST });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > admin > addPublisherToAccount', err);
    Toast.show(Toast.TYPE.ERROR, `${getLabelValue('message_general_error', labels)}`);
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* removePublisherFromAccountWatch() {
  yield takeLatest(
    REMOVE_PUBLISHER_FROM_ACCOUNT._REQUEST,
    removePublisherFromAccount
  );
}

function* switchUserType({ body }) {
  try {
    yield put({ type: LOADER_OPEN });
    yield call(admin.switchUserType, body);
    yield put({ type: SWITCH_USER_TYPE._SUCCESS });
    yield put({ type: GET_USERS_LIST._REQUEST });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > admin > addPublisherToAccount', err);
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* switchUserTypeWatch() {
  yield takeLatest(SWITCH_USER_TYPE._REQUEST, switchUserType);
}

function* getAvailablePublisherByAccount({ username }) {
  try {
    yield put({ type: LOADER_OPEN });
    const {
      data: { data: { result } = {} } = {}
    } = yield call(admin.getAvailablePublisherByAccount, { username });
    yield put({ type: GET_AVAILABLE_PUBLISHER_BY_ACCOUNT._SUCCESS, result });
  } catch (err) {
    // eslint-disable-next-line no-console
    const message = err?.response?.data?.data === 'MAXIMUM_LOOKUP_RESULTS_ERROR'
      ? err?.response?.data?.data
      : 'Si è verificato un errore';
    yield put({ type: GET_USERS_LIST._ERROR, err: { message } });
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* getAvailablePublisherByAccountWatch() {
  yield takeLatest(
    GET_AVAILABLE_PUBLISHER_BY_ACCOUNT._REQUEST,
    getAvailablePublisherByAccount
  );
}

// PUBLISHERS

function* getPublishersList() {
  try {
    yield put({ type: LOADER_OPEN });
    const { data: { data = {} } = {} } = yield call(admin.getPublishersList);

    yield put({ type: GET_PUBLISHERS_LIST._SUCCESS, data });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > admin > getPublishersList', err);
    const message = err?.response?.data?.data === 'MAXIMUM_LOOKUP_RESULTS_ERROR'
      ? err?.response?.data?.data
      : 'Si è verificato un errore';
    yield put({ type: GET_USERS_LIST._ERROR, err: { message } });
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* getPublishersListWatch() {
  yield takeLatest(GET_PUBLISHERS_LIST._REQUEST, getPublishersList);
}

function* deletePublisher() {
  const labels = yield select(state => state.app.selectedLabel);
  try {
    yield put({ type: LOADER_OPEN });
    const {
      payload: { name = '' }
    } = yield select(state => state.modal);
    yield call(admin.deletePublisher, { name });
    yield put({ type: DELETE_PUBLISHER._SUCCESS });
    yield put({ type: GET_PUBLISHERS_LIST._REQUEST });
    yield put({ type: GET_PUBLISHERS._REQUEST });
    Toast.show(Toast.TYPE.SUCCESS, `${name} ${getLabelValue('message_deleted_successfully', labels)}`);
  } catch (err) {
    // eslint-disable-next-line no-console
    yield put({ type: DELETE_ACCOUNT._ERROR });
    Toast.show(Toast.TYPE.ERROR, `${getLabelValue('message_general_error', labels)}`);
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* deletePublisherWatch() {
  yield takeLatest(DELETE_PUBLISHER._REQUEST, deletePublisher);
}

function* publisherAdd({ body }) {
  const labels = yield select(state => state.app.selectedLabel);
  try {
    yield put({ type: LOADER_OPEN });
    yield call(admin.addPublisher, body);
    yield put({ type: PUBLISHER_ADD._SUCCESS });
    yield put({ type: GET_PUBLISHERS_LIST._REQUEST });
    yield put({ type: GET_AVAILABLE_PLATFORM._REQUEST });
    yield put({ type: GET_PUBLISHERS._REQUEST });
    Toast.show(Toast.TYPE.SUCCESS, `${body.name} ${getLabelValue('message_created_successfully', labels)}`);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > admin > publisherAdd', err);
    Toast.show(Toast.TYPE.ERROR, `${getLabelValue('message_general_error', labels)}`);
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* publisherAddWatch() {
  yield takeLatest(PUBLISHER_ADD._REQUEST, publisherAdd);
}

function* publisherEdit({ body }) {
  const labels = yield select(state => state.app.selectedLabel);
  try {
    yield put({ type: LOADER_OPEN });
    yield call(admin.editPublisher, body);
    yield put({ type: PUBLISHER_EDIT._SUCCESS });
    yield put({ type: GET_PUBLISHERS_LIST._REQUEST });
    yield put({ type: GET_AVAILABLE_PLATFORM._REQUEST });
    Toast.show(Toast.TYPE.SUCCESS, `${body.name} ${getLabelValue('message_updated_successfully', labels)}`);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > admin > publisherEdit', err);
    Toast.show(Toast.TYPE.ERROR, `${getLabelValue('message_general_error', labels)}`);
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* publisherEditWatch() {
  yield takeLatest(PUBLISHER_EDIT._REQUEST, publisherEdit);
}

function* getDefaultTemplateByPublisher({ publisher: name }) {
  try {
    yield put({ type: LOADER_OPEN });
    const {
      data: { data: { result } = {} } = {}
    } = yield call(admin.getDefaultTemplateByPublisher, { name });
    yield put({ type: GET_DEFAULT_TEMPLATE_BY_PUBLISHER._SUCCESS, result });
  } catch (err) {
    // eslint-disable-next-line no-console
    const message = err?.response?.data?.data === 'MAXIMUM_LOOKUP_RESULTS_ERROR'
      ? err?.response?.data?.data
      : 'Si è verificato un errore';
    yield put({
      type: GET_DEFAULT_TEMPLATE_BY_PUBLISHER._ERROR,
      err: { message }
    });
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* getDefaultTemplateByPublisherWatch() {
  yield takeLatest(GET_DEFAULT_TEMPLATE_BY_PUBLISHER._REQUEST, getDefaultTemplateByPublisher);
}

function* getSftpOptionsByPublisher({ namePublisher: name }) {
  try {
    yield put({ type: LOADER_OPEN });
    const {
      data: { data: { result } = {} } = {}
    } = yield call(admin.getSftpOptionsByPublisher, { name });
    yield put({ type: GET_SFTP_OPTIONS_BY_PUBLISHER._SUCCESS, result });
  } catch (err) {
    // eslint-disable-next-line no-console
    const message = 'Si è verificato un errore';
    yield put({ type: GET_SFTP_OPTIONS_BY_PUBLISHER._ERROR, err: { message } });
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* getSftpOptionsByPublisherWatch() {
  yield takeLatest(
    GET_SFTP_OPTIONS_BY_PUBLISHER._REQUEST,
    getSftpOptionsByPublisher
  );
}

export default [
  getUserListWatch(),
  userAddWatch(),
  deleteAccountWatch(),
  userEditWatch(),
  addPublisherToAccountWatch(),
  switchUserTypeWatch(),
  updatePublisherInAccountWatch(),
  removePublisherFromAccountWatch(),
  getPublishersListWatch(),
  deletePublisherWatch(),
  getAvailablePublisherByAccountWatch(),
  publisherAddWatch(),
  publisherEditWatch(),
  getDefaultTemplateByPublisherWatch(),
  getSftpOptionsByPublisherWatch()
];
