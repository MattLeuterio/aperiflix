import {
  call, put, takeLatest
} from 'redux-saga/effects';

import axios from 'axios';
import { GET_PRODUCT_DETAILS, GET_PRODUCT_VIDEO } from '../actions/product';

function* getProductDetails({ payload }) {
  const type = payload.prodType === 'Film' ? 'movie' : 'tv';
  try {
    if (payload.id) {
      const getProdDetails = () => axios.get(`https://api.themoviedb.org/3/${type}/${payload.id}?api_key=e2330ecaa641a077ab62520c44ab636f&language=it-IT`)
        .then((response) => response.data);
      const data = yield call(getProdDetails);
      yield put({ type: GET_PRODUCT_DETAILS._SUCCESS, data });
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > product > getProductDetails', err);
    yield put({ type: GET_PRODUCT_DETAILS._ERROR, err: 'ERROR' });
  }
}

function* getProductDetailsWatch() {
  yield takeLatest(GET_PRODUCT_DETAILS._REQUEST, getProductDetails);
}

function* getProductVideo({ payload }) {
  const type = payload.prodType === 'Film' ? 'movie' : 'tv';
  try {
    if (payload.id) {
      const getVideo = () => axios.get(`https://api.themoviedb.org/3/${type}/${payload.id}/videos?api_key=e2330ecaa641a077ab62520c44ab636f&language=it-IT`)
        .then((response) => response.data);
      const data = yield call(getVideo);
      yield put({ type: GET_PRODUCT_VIDEO._SUCCESS, data });
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > product > getProductDetails', err);
    yield put({ type: GET_PRODUCT_VIDEO._ERROR, err: 'ERROR' });
  }
}

function* getProductVideoWatch() {
  yield takeLatest(GET_PRODUCT_VIDEO._REQUEST, getProductVideo);
}

export default [
  getProductDetailsWatch(),
  getProductVideoWatch()
];
