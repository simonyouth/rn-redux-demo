import {
	FETCH_FAIL,
	FETCH_SUCCESS,
	FETCH_LOADING,
} from "../actions/HomeAction";

const initialState = {
	todos: 'this is init',
};

function getData(state = initialState, action) {
	const { type, payload = {} } = action;
	switch (type) {
		case FETCH_LOADING:
			return { loading: true };
		case FETCH_FAIL:
			return { loading: false, type };
		case FETCH_SUCCESS:
			return { ...payload, loading: false, type };
	}
}

export default getData
