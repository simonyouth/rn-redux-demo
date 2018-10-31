import {post} from "../utils/request";

export const LIST_FAILED = 'LIST_FAILED';
export const LIST_SUCCESS = 'LIST_SUCCESS';

function failed(error) {
	return {
		type: LIST_FAILED,
		payload: error,
	}
}

function receiveData(payload) {
	return {
		type: LIST_SUCCESS,
		payload: payload,
	}
}

export function requestPosts(url) {
	return dispatch => {
		return post(url)
			.then(response => response.json(),
				error => dispatch(failed(error.message)))
			.then(myJson => {
				const { data } = myJson;
				dispatch(receiveData(data));
			})
	}
}