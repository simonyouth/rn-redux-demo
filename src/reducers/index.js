import { combineReducers } from 'redux';
import getHomeData from './HomeReducer';
import getPackages from './PackagesReducer';

const reducer = combineReducers({
		getHomeData,
		getPackages,
});

export default reducer;
