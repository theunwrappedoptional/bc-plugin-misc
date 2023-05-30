import { createReduxStore, register } from '@wordpress/data';
import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';
import * as resolvers from './resolvers';
import controls from './controls';

const store = createReduxStore( 'bc-plugin-misc/todos', {
	reducer,
	actions,
	selectors,
	resolvers,
	controls,
} );

register( store );
