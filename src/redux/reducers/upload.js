import produce from 'immer';

import moment from 'moment';
import { MODAL_CLOSE, MODAL_OPEN } from '../actions';
import { AUTH_LOGOUT } from '../actions/auth';
import { newForm, newFormField } from '../../utils/form';
import { RegexpType } from '../../utils/validator';
import { GET_YT_PLAYLIST_PUBLISHER, UPLOAD_VIDEO } from '../actions/upload';

const initialFormYoutube = newForm([
  newFormField({ field: 'video', required: true, type: RegexpType.STRING }),
  newFormField({ field: 'name', required: true, type: RegexpType.STRING }),
  newFormField({ field: 'thumbnail', required: false, type: RegexpType.STRING }),
  newFormField({ field: 'playlist_id', required: false, type: RegexpType.STRING }),
  newFormField({ field: 'publisher', required: true, type: RegexpType.STRING }),
  newFormField({ field: 'title', required: true, type: RegexpType.STRING }),
  newFormField({ field: 'privacy', required: true, type: RegexpType.STRING }),
  newFormField({
    field: 'add_asset_labels',
    required: true,
    type: RegexpType.STRING
  }),
  newFormField({
    field: 'description',
    required: true,
    type: RegexpType.STRING
  }),
  newFormField({ field: 'keywords', required: true, type: RegexpType.STRING }),
  newFormField({
    field: 'notify_subscribers',
    required: true,
    valid: true,
    value: 'no',
    type: RegexpType.STRING,
    touched: true
  }),
  newFormField({
    field: 'start_time',
    required: true,
    valid: true,
    value: moment(new Date())
      .format(),
    type: RegexpType.STRING
  }),
  newFormField({ field: 'end_time', required: true, type: RegexpType.STRING }),
  newFormField({
    field: 'ad_types',
    required: true,
    value: 'instream_standard | instream_trueview',
    valid: true,
    type: RegexpType.STRING
  }),
  newFormField({
    field: 'ad_break_times',
    value: '0|00:04:00',
    valid: true,
    required: true,
    type: RegexpType.STRING
  })
]);

const initialState = {
  uploadForm: initialFormYoutube,
  ytPlaylistPublisher: []
};

const uploadReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case AUTH_LOGOUT._ERROR:
    case AUTH_LOGOUT._SUCCESS:
      draft = initialState;
      break;

    case UPLOAD_VIDEO._SUCCESS:
      draft = initialState;
      break;

    case GET_YT_PLAYLIST_PUBLISHER._SUCCESS: {
      const list = action.result;
      draft.ytPlaylistPublisher = list;

      break;
    }

    default:
      return state;
  }
  return draft;
});

export default uploadReducer;
