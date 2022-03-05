export function createAsyncActionType(section = '', type = '') {
  const action = {
    _REQUEST: `@@${section.toLowerCase()}/${type.toUpperCase()}_REQUEST`,
    _SUCCESS: `@@${section.toLowerCase()}/${type.toUpperCase()}_SUCCESS`,
    _ERROR: `@@${section.toLowerCase()}/${type.toUpperCase()}_ERROR`
  };

  return action;
}

// app
export const APP_STORE_RELOAD = '@@global/APP_STORE_RELOAD';
export const LOADER_OPEN = '@@global/LOADER_OPEN';
export const LOADER_CLOSE = '@@global/LOADER_CLOSE';
export const APP_GLOBAL_OVERLAY_TOGGLE = '@@global/APP_GLOBAL_OVERLAY_TOGGLE';
export const APP_STORES_SET = '@@global/APP_STORES_SET';
export const SET_BREADCRUMBS = '@@global/SET_BREADCRUMBS';

// publishers
export const GET_PUBLISHERS = createAsyncActionType('app', 'GET_PUBLISHERS');
export const GET_AVAILABLE_PLATFORM = createAsyncActionType('app', 'GET_AVAILABLE_PLATFORM');
export const GET_LABELS = createAsyncActionType('app', 'GET_LABELS');
export const SET_SELECTED_LABELS = '@@app/SET_SELECTED_LABELS';
export const SET_SELECTED_PUBLISHERS = '@@app/SET_SELECTED_PUBLISHERS';

// modal
export const MODAL_OPEN = '@@global/MODAL_OPEN';
export const MODAL_CLOSE = '@@global/MODAL_CLOSE';

//input focus
export const CONTROL_FOCUS_CHANGE = '@@global/CONTROL_FOCUS_CHANGE';
