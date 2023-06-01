//selectors shoud not have any sides effects
//that's why we use resolvers (resolvers.js)

export const getTodos = ( state ) => {
	return state.items;
};

export const getTodosNumber = ( state ) => {
	return state.items.length;
};

export const getDoneTodos = ( state ) => {
	return state.items.filter( ( todo ) => todo.completed ).length;
};

export const getUnDoneTodos = ( state ) => {
	return state.items.filter( ( todo ) => ! todo.completed ).length;
};
