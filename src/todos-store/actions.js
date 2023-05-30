import { ADD_TODO } from './types';

export const addToDo = ( todo ) => {
	return {
		type: ADD_TODO,
		todo,
	};
};
