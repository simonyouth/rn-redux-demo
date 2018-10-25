const initialState = {
	todos: 'this is init',
};

function todoApp(state = initialState, action) {
	// console.log(action.type)
		const { payload } = action;
		return { ...state, response: 'Ok! You did it!', payload }
	
}

export default todoApp
