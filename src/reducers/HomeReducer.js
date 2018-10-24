const initialState = {
	todos: 'this is init',
};

function todoApp(state = initialState, action) {
	if (action.type === 'FETCH_SUCCESS') {
		const { sub } = action;
		return { ...state, response: 'Ok! You did it!', sub }
	}
}

export default todoApp
