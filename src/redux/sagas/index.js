import { all } from 'redux-saga/effects';
import appSagas from './app';
import authSagas from './auth';
import adminSagas from './admin';
import searchSagas from './search';
import uploadSagas from './upload';

export default function* rootSaga() {
  yield all([...appSagas, ...authSagas, ...adminSagas, ...searchSagas, ...uploadSagas]);
}
