import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import getData from '../reducers/HomeReducer';

const loggerMiddleware = createLogger()

const store = createStore(
	getData,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);

export default store;