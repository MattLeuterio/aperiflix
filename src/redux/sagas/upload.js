import {
  call, put, select, takeLatest
} from 'redux-saga/effects';

import { LOADER_CLOSE, LOADER_OPEN, MODAL_OPEN } from '../actions';
import { GET_YT_PLAYLIST_PUBLISHER, UPLOAD_VIDEO } from '../actions/upload';
import ErrorModal from '../../components/Modals/ErrorModal';
import upload from '../../api/upload';
import Toast from '../../components/Toast';
import { getLabelValue } from '../../utils/common';

function* uploadVideo({ payload }) {
  const labels = yield select(state => state.app.selectedLabel);
  const publisher = yield select(state => state.app.selectedPublisher.name);

  try {
    yield put({ type: LOADER_OPEN });
    const { platform } = payload;
    const formData = new FormData();

    const getFileExtension = (filename) => {
      var ext = /^.+\.([^.]+)$/.exec(filename);
      return ext == null ? "" : ext[1];
    };

    Object.keys(payload).forEach(key => {
      if (key === 'video') {
        if (platform === 'youtube') {
          formData.append(key, payload[key], `${payload[key].name}.${getFileExtension(payload.video.name)}`);
        } else {
          formData.append(key, payload[key]);
        }
      } else {
        formData.append(key, payload[key]);
      }
    });
    const response = yield call(upload.uploadVideo, formData);
    yield put({ type: UPLOAD_VIDEO._SUCCESS });
    yield put({ type: GET_YT_PLAYLIST_PUBLISHER._REQUEST, publisher });
    if (platform === 'dailymotion') {
      response.data.data.result.dailymotion.code === 200
        ? Toast.show(Toast.TYPE.SUCCESS, `${getLabelValue('message_upload_video', labels)}`)
        : Toast.show(Toast.TYPE.ERROR, `${getLabelValue('message_general_error', labels)}`);
    } else {
      response.data.data.result.youtube.code === 200
        ? Toast.show(Toast.TYPE.SUCCESS, `${getLabelValue('message_upload_video', labels)}`)
        : Toast.show(Toast.TYPE.ERROR, `${getLabelValue('message_general_error', labels)}`);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > upload > uploadVideo', err);
    Toast.show(Toast.TYPE.ERROR, `${getLabelValue('message_general_error', labels)}`);
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* uploadVideoWatch() {
  yield takeLatest(UPLOAD_VIDEO._REQUEST, uploadVideo);
}

function* getYtPlaylistPublisher({ publisher }) {
  try {
    yield put({ type: LOADER_OPEN });
    const {
      data: { data: { result } = {} } = {}
    } = yield call(upload.getYtPlaylistPublisher, { publisher });
    yield put({ type: GET_YT_PLAYLIST_PUBLISHER._SUCCESS, result });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('sagas > upload > uploadVideo', err);
  } finally {
    yield put({ type: LOADER_CLOSE });
  }
}

function* getYtPlaylistPublisherWatch() {
  yield takeLatest(GET_YT_PLAYLIST_PUBLISHER._REQUEST, getYtPlaylistPublisher);
}

export default [uploadVideoWatch(), getYtPlaylistPublisherWatch()];
