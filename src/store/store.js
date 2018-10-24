import { createStore } from 'redux';
import todosApp from '../reducers/HomeReducer';
import { select } from '../actions/HomeAction';

const store = createStore(todosApp);

// console.log(store.getState());
// const unsub = store.subscribe(() => console.log(store.getState()));
//
// store.dispatch(select('am I success?'));
//
// unsub();
export default store;