//controls.js define the execution flow behavior associated with a specific type of action.

//Instead of just updating the state directly like we have in the addTodo action, in controls.js we can dispatch an action that will do something like sending an API request.

import { FETCH_TODOS } from './types';

export const fetchTodos = () => {
	return {
		type: FETCH_TODOS,
	};
};

export default {
	FETCH_TODOS() {
		return window
			.fetch( 'https://jsonplaceholder.typicode.com/todos?_limit=10' )
			.then( ( response ) => {
				if ( response.ok ) {
					return response.json();
				}
				throw new Error( 'Could not fetch todos' );
			} );
	},
};
