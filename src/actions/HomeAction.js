import { post } from '../utils/request';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const FETCH_LOADING = 'FETCH_LOADING';

function requestData(payload) {
	return {
		type: FETCH_LOADING,
		payload: payload
	}
}

function failed(error) {
	return {
		type: FETCH_FAIL,
		payload: error,
	}
}

function receiveData(payload) {
	return {
		type: FETCH_SUCCESS,
		payload: payload,
	}
}

export function requestPosts(url) {
	return dispatch => {
		dispatch(requestData());
		return post(url)
			.then(response => response.json(),
				error => dispatch(failed(error.message)))
			.then(myJson => {
				const { data } = myJson.response;
				dispatch(receiveData(data));
			})
		
	}
}