//selectors shoud not have any sides effects
//that's why we use resolvers (resolvers.js)

export const getTodos = ( state ) => {
	return state.items;
};
