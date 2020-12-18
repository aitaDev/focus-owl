import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { tasks } from './tasks';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			tasks,
		}),
		applyMiddleware(thunk, logger)
	);
	return store;
};
