import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {
    createStore, applyMiddleware,
    combineReducers
} from 'redux';
import {
  LogsReducer,
} from '../reducers'


export const store = createStore(
  combineReducers({
    logs:LogsReducer,
  }),
  applyMiddleware(thunkMiddleware, logger)
);
