import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {authReducer, uiReducer} from '~reducers';

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
});

const composeEnhacers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhacers(applyMiddleware(thunk)),
);
