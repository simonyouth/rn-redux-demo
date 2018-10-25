import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import todosApp from '../reducers/HomeReducer';

const loggerMiddleware = createLogger()

const store = createStore(
	todosApp,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);

export default store;