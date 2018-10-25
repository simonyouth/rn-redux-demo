import { post } from '../utils/request';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const FETCH_LOADING = 'FETCH_LOADING';

export function select(sub) {
	return {
		type: FETCH_SUCCESS,
		sub,
	}
}

function save(type, payload) {
	return {
		type: type,
		sub: payload
	}
}
export const UPDATE_DATA = 'UPDATE_DATA';

export function update(payload) {
	return {
		type: UPDATE_DATA,
		payload: payload,
	}
}

export function requestPosts(url) {
	return dispatch => {
		dispatch(save(FETCH_LOADING));
		return post(url)
			.then(function(response) {
				return response.json();
			})
			.then(function(myJson) {
				dispatch(save(FETCH_SUCCESS, JSON.stringify(myJson)));
			});
	}
}

// 请求失败