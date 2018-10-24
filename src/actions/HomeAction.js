export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export function select(sub) {
	return {
		type: FETCH_SUCCESS,
		sub,
	}
}

export const UPDATE_DATA = 'UPDATE_DATA';

export function update(sub) {
	return {
		type: UPDATE_DATA,
		sub,
	}
}

export const REQUEST_POSTS = 'REQUEST_POSTS';

export function requestPosts(sub) {
	return {
		type: REQUEST_POSTS,
		sub,
	}
}

// 收到请求
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function receivePosts(sub, json) {
	return {
		type: RECEIVE_POSTS,
		sub,
		posts: json.data,
		receiveAt: Date.now(),
	}
}

// 请求失败