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

export function requestPosts(url, params) {
	return dispatch => {
		return post(url, params)
			.then(response => response.json())
			.then(myJson => {
				console.log(myJson)
				dispatch(receiveData(myJson.result));
			})
			.catch(error => dispatch(failed(error.message)))
	}
}