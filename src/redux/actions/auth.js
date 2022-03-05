import { createAsyncActionType } from './index';

export const AUTH_LOGIN = createAsyncActionType('auth', 'AUTH_LOGIN');
export const AUTH_LOGOUT = createAsyncActionType('auth', 'AUTH_LOGOUT');
