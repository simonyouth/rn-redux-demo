import {
	FETCH_FAIL,
	FETCH_SUCCESS,
	FETCH_LOADING,
} from "../actions/HomeAction";

const initialState = {
	// line: [],
	// patient: [],
	// depart: [],
};

function getHomeData(state = initialState, action) {
	const { type, payload = {} } = action;
	switch (type) {
		case FETCH_LOADING:
			return { loading: true, type};
		case FETCH_FAIL:
			return { loading: false, type };
		case FETCH_SUCCESS:
			return { ...payload, loading: false, type };
		default:
			return {...state}
	}
}

export default getHomeData
