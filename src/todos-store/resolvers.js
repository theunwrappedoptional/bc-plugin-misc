//here we define the side effects for our selectors

import { fetchTodos } from './controls';
import { populateTodos } from './actions';

//the function must have the same name as the selector to run at the same time
export function* getTodos() {
	const todos = yield fetchTodos();
	return populateTodos( todos );
}

// to send an API request in resolver we use controls.js
