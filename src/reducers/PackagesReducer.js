import {
	LIST_SUCCESS,
	LIST_FAILED,
} from "../actions/PackagesAction";

const initialState = {
	packages: [],
};

function getPackages(state = initialState, action) {
	const { type, payload = {} } = action;
	switch (type) {
		case LIST_FAILED:
			return { type };
		case LIST_SUCCESS:
			return { ...payload, type };
		default:
			return { ...state }
	}
}

export default getPackages
