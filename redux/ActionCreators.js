import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchTasks = () => (dispatch) => {
	dispatch(tasksLoading());

	return fetch(baseUrl + 'tasks')
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(
						`error ${response.status}: ${response.statusText}`
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				const errMess = new Error(error.message);
				throw errMess;
			}
		)
		.then((response) => response.json())
		.then((tasks) => dispatch(addTasks(tasks)))
		.catch((error) => dispatch(tasksFailed(error.message)));
};

export const tasksLoading = () => ({
	type: ActionTypes.TASKS_LOADING,
});

export const tasksFailed = () => ({
	type: ActionTypes.TASKS_FAILED,
	payload: errMess,
});

export const addTasks = (tasks) => ({
	type: ActionTypes.ADD_TASKS,
	payload: tasks,
});

export const addTask = (task) => ({
	type: ActionTypes.ADD_TASK,
	payload: task,
});
