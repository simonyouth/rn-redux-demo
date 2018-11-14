import { post } from '../utils/request';

export const EXPRESS_SUCCESS = 'EXPRESS_SUCCESS';
export const EXPRESS_FAILED = 'EXPRESS_FAILED';

function failed(error) {
    return {
        type: EXPRESS_FAILED,
        payload: error,
    }
}

function receiveData(payload) {
    return {
        type: EXPRESS_SUCCESS,
        payload: payload,
    }
}

export function requestPosts(url, params) {
    return dispatch => {
        return post(url, params)
            .then(response => response.json())
            .then(myJson => {
                console.log(myJson)
                const { resultcode, result } = myJson;
                if (resultcode !== '200') {
                    dispatch(failed(myJson))
                } else {
                    dispatch(receiveData(result));
                }
            })
            .catch(error => dispatch(failed(error.message)))
    }
}
