import { combineReducers } from 'redux';
import alert from './alert.js';
// import reducer2 from './reducer2';

const rootReducer = combineReducers({
	alert,
	// reducer2,
});

export default rootReducer;
