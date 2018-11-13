import { combineReducers } from 'redux';
import getHomeData from './HomeReducer';
import getPackages from './PackagesReducer';
import getExpress from './ExpressReducer';

const reducer = combineReducers({
	getHomeData,
	getPackages,
	getExpress,
});

export default reducer;
