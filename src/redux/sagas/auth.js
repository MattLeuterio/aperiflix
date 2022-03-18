import {
  call, put, takeLatest
} from 'redux-saga/effects';

import { push } from 'redux-first-history';
import { APP_STORE_RELOAD, GET_PUBLISHERS, LOADER_CLOSE, LOADER_OPEN, MODAL_OPEN } from '../actions';
import { AUTH_LOGIN, AUTH_LOGOUT } from '../actions/auth';
import auth from '../../api/auth';
import { dismissKeepTokenAlive, getToken } from '../../utils/token';
import storage from '../../utils/storage';
import routes from '../../routes';

function* appReload() {
  try {
    const data = getToken();
    if (data?.token) {
      yield put({ type: AUTH_LOGIN._SUCCESS, data });
    } else {
      //yield put({ type: AUTH_LOGIN._ERROR });
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > auth > appReload', err);
    yield put({ type: AUTH_LOGIN._ERROR });
  }
}

function* appReloadWatch() {
  yield takeLatest(APP_STORE_RELOAD, appReload);
}

function* authLogin({ authForm: { username, password } = {} }) {
  try {
    yield put({ type: LOADER_OPEN });
    const body = {
      username: username.value,
      password: password.value
    };
    const { data: { data = {} } = {} } = yield call(auth.authLogin, body);
    yield put({ type: AUTH_LOGIN._SUCCESS, data });
  } catch (err) {
    yield put({ type: AUTH_LOGIN._ERROR, err: { message: 'Attenzione, credenziali errate!' } });
    yield put({
      type: MODAL_OPEN,
      id: '1',
      payload: {
        errorText:
          'Attenzione, credenziali errate!'
      }
    });
    // eslint-disable-next-line no-console
    console.log('sagas > auth > authLogin', err);
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* authLoginWatch() {
  yield takeLatest(AUTH_LOGIN._REQUEST, authLogin);
}

function* authLogout() {
  try {
    yield put({ type: LOADER_OPEN });
    storage.clearAll();
    dismissKeepTokenAlive();
    // yield call(auth.authLogout);
    yield put({ type: AUTH_LOGOUT._SUCCESS });
    yield put(push(routes.auth.path));
    window.location.reload();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > auth > authLogout', err);
    yield put({ type: AUTH_LOGOUT._ERROR });
    yield put(push(routes.auth.path));
    window.location.reload();
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* authLogoutWatch() {
  yield takeLatest(AUTH_LOGOUT._REQUEST, authLogout);
}

export default [
  appReloadWatch(),
  authLoginWatch(),
  authLogoutWatch()
];
