import {
    EXPRESS_SUCCESS,
    EXPRESS_FAILED,
} from "../actions/ExpressAction";

const initialState = {
    loading: true
};

function getExpressData(state = initialState, action) {
    const { type, payload = {} } = action;
    switch (type) {
        case EXPRESS_FAILED:
            return { loading: false, type };
        case EXPRESS_SUCCESS:
            return { ...payload, loading: false, type };
        default:
            return {...state}
    }
}

export default getExpressData
