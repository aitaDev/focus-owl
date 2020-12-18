//reducer

import * as ActionTypes from './ActionTypes';

export const tasks = (
	state = { isLoading: true, errMess: null, tasks: [] },
	action
) => {
	switch (action.type) {
		case ActionTypes.ADD_TASKS:
			return {
				...state,
				isLoading: false,
				errMess: null,
				campsites: action.payload,
			};

		case ActionTypes.REMOVE_TASKS:
			return {
				...state,
				isLoading: false,
				errMess: null,
				campsites: action.payload,
			};

		case ActionTypes.TASKS_LOADING:
			return { ...state, isLoading: true, errMess: null, campsites: [] };

		case ActionTypes.TASKS_FAILED:
			return { ...state, isLoading: false, errMess: action.payload };

		default:
			return state;
	}
};
