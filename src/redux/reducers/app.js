import produce from 'immer';
import { LOCATION_CHANGE } from 'redux-first-history';

import {
  LOADER_OPEN,
  LOADER_CLOSE,
  APP_GLOBAL_OVERLAY_TOGGLE,
  GET_PUBLISHERS,
  SET_SELECTED_PUBLISHERS,
  GET_AVAILABLE_PLATFORM, GET_LABELS, SET_SELECTED_LABELS
} from '../actions';
import { AUTH_LOGOUT, AUTH_LOGIN } from '../actions/auth';

import { Toast } from '../../components';
import storage from '../../utils/storage';
import { setToken } from '../../utils/token';

const initialState = {
  loader: {
    instances: 0,
    isSpinning: false
  },
  globalOverlayOpen: false,
  publishersList: [],
  selectedPublisher: '',
  availablePlatformList: [],
  labels: {},
  selectedLabel: {},
  error: ''
};

const appReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case LOCATION_CHANGE: {
      if (action.payload.pathname !== '/auth') localStorage.setItem('location', action.payload.pathname);
      localStorage.removeItem('publishedAfter');
      localStorage.removeItem('publishedBefore');
      localStorage.removeItem('maxResultsValue');
      localStorage.removeItem('videoDurationValue');
      draft.current_path = action.payload.pathname;
      draft.globalOverlayOpen = initialState.globalOverlayOpen;
      break;
    }

    case AUTH_LOGOUT._ERROR:
    case AUTH_LOGOUT._SUCCESS:
      draft = initialState;
      break;

    case APP_GLOBAL_OVERLAY_TOGGLE:
      draft.globalOverlayOpen = !state.globalOverlayOpen;
      break;

    case LOADER_OPEN: {
      const i = state.loader.instances > 0 ? state.loader.instances + 1 : 1;
      draft.loader.instances = i;
      draft.loader.isSpinning = i > 0;

      break;
    }

    case LOADER_CLOSE: {
      const i = state.loader.instances >= 1 ? state.loader.instances - 1 : 0;
      draft.loader.instances = i;
      draft.loader.isSpinning = i > 0;

      break;
    }

    case GET_PUBLISHERS._SUCCESS: {
      const list = action.publishersList.data.data.result;
      draft.publishersList = list;
      if (state.availablePlatformList.length > 0) {
        const selectedPublisher = list[0] ? list[0] : {};
        // eslint-disable-next-line prefer-destructuring
        const platform_enabled = [...state.availablePlatformList].find(item => item.name === selectedPublisher.name);
        if (platform_enabled) {
          selectedPublisher.youtube.platform_enabled = platform_enabled.youtube.platform_enabled;
          selectedPublisher.dailymotion.platform_enabled = platform_enabled.dailymotion.platform_enabled;
        } else {
          selectedPublisher.youtube.platform_enabled = false;
          selectedPublisher.dailymotion.platform_enabled = false;
        }
        draft.selectedPublisher = selectedPublisher;
        break;
      } else {
        // eslint-disable-next-line prefer-destructuring
        draft.selectedPublisher = list[0] ? list[0] : {};
        break;
      }
    }

    case GET_AVAILABLE_PLATFORM._SUCCESS: {
      const list = action.availablePlatformList.data.data.result;
      draft.availablePlatformList = list;
      // eslint-disable-next-line prefer-destructuring
      let selectedPublisher = state.selectedPublisher ? { ...state.selectedPublisher } : '';
      if (selectedPublisher && list.length > 0) {
        const platform_enabled = [...list].find(item => item.name === selectedPublisher.name);
        if (platform_enabled) {
          selectedPublisher = {
            ...selectedPublisher,
            youtube: { platform_enabled: platform_enabled.youtube.platform_enabled },
            dailymotion: { platform_enabled: platform_enabled.dailymotion.platform_enabled }
          };
        } else {
          selectedPublisher = {
            ...selectedPublisher,
            youtube: { platform_enabled: false },
            dailymotion: { platform_enabled: false }
          };
        }
        draft.selectedPublisher = selectedPublisher;
      }
      break;
    }

    case SET_SELECTED_PUBLISHERS: {
      let selected = action.publisher;
      // eslint-disable-next-line prefer-destructuring
      const availablePlatformList = state.availablePlatformList;
      if (availablePlatformList.length > 0) {
        const platform_enabled = [...availablePlatformList].find(item => item.name === selected.name);
        if (platform_enabled) {
          selected = {
            ...selected,
            youtube: { platform_enabled: platform_enabled.youtube.platform_enabled },
            dailymotion: { platform_enabled: platform_enabled.dailymotion.platform_enabled }
          };
        } else {
          selected = {
            ...selected,
            youtube: { platform_enabled: false },
            dailymotion: { platform_enabled: false }
          };
        }
      }
      draft.selectedPublisher = selected;
      break;
    }

    case GET_LABELS._SUCCESS: {
      const { data } = action;
      draft.labels = data;
      const selectedLabel = storage.read('selectedLabel')?.value || 'en';
      draft.selectedLabel = data[selectedLabel];
      break;
    }

    case AUTH_LOGIN._SUCCESS: {
      const { data } = action;
      const labels = { ...state.labels };
      draft.selectedLabel = labels[data?.user_data?.defaultLanguage];
      storage.write('selectedLabel', data?.user_data?.defaultLanguage);
      break;
    }

    case SET_SELECTED_LABELS: {
      const { label } = action;
      storage.write('selectedLabel', label);
      draft.selectedLabel = state.labels[label];
      break;
    }

    case AUTH_LOGIN._ERROR:
    case GET_PUBLISHERS._ERROR: {
      const { err: { message = 'Si è verificato un errore' } = {} } = action;
      Toast.show(Toast.TYPE.ERROR, message);
      break;
    }

    default:
      return state;
  }
  return draft;
});

export default appReducer;
