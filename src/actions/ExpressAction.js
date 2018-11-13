import { post } from '../utils/request';

export const EXPRESS_SUCCESS = 'PATIENT_SUCCESS';
export const EXPRESS_FAILED = 'PATIENT_FAILED';

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
                dispatch(receiveData(myJson.result));
            })
            .catch(error => dispatch(failed(error.message)))
    }
}
