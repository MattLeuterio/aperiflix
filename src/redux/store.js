import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import rootSaga from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const historyApi = createBrowserHistory();

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({
  history: historyApi,
  oldLocationChangePayload: true
});

export const store = createStore(
  combineReducers({
    router: routerReducer,
    ...rootReducer
  }),
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(routerMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
