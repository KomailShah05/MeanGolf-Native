// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import combinedReducers from '../index';

// const store = createStore(
// 	reducer,
// 	composeWithDevTools(
// 		applyMiddleware(...middleware)
// 		// other store enhancers if any
// 	)
// );

// export default store;

// import { createStore } from 'redux';
// import rootReducer from '../src/reducers/reducers'; // Import your root reducer

// const store = createStore(rootReducer);

// export default store;

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import rootReducer from '../src/reducers/reducers'; // Import your root reducer
import thunk from 'redux-thunk';

const middleware = [thunk];

const composeEnhancers = composeWithDevTools({
	realtime: true,
	name: 'Your Instance Name',
	hostname: 'localhost',
	port: 1024, // the port your remotedev server is running at
});

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(...middleware)
		// other store enhancers if any
	)
);

export default store;
