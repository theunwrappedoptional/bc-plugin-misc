//here we define the side effects for our selectors

import { dispatch } from '@wordpress/data';
import { fetchTodos } from './controls';
import { populateTodos } from './actions';

//the function must have the same name as the selector to run at the same time
export function* getTodos() {
	try {
		const todos = yield fetchTodos();
		// console.log(todos)
		return populateTodos( todos );
	} catch ( error ) {
		// console.log(error)
		return dispatch( 'core/notices' ).createErrorNotice(
			error.message || 'Could not fetch todos.'
		);
	}
}

// to send an API request in resolver we use controls.js
