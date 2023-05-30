import { ADD_TODO, POPULATE_TODOS } from './types';

export const addToDo = ( todo ) => {
	return {
		type: ADD_TODO,
		todo,
	};
};

export const populateTodos = ( todos ) => {
	return {
		type: POPULATE_TODOS,
		todos,
	};
};
