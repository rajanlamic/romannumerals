import { createStore, applyMiddleware } from 'redux';
import reducers from './store-reducer';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

let debug = false;
let store;

if(debug) {
	const logger = (createStoreWithMiddleware) => (next) => (action) => {
	  console.log("action fired ", action);
	  next(action);
	}

	const composeEnhancers =
	    typeof window === 'object' &&
	    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
	        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
	          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
	        }) : '';

  store = createStore(reducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(logger, thunk, promiseMiddleware()),
  // other store enhancers if any
));
} else {
	const createStoreWithMiddleware = applyMiddleware(
		thunk,
		promiseMiddleware())(createStore);
		
	store = createStoreWithMiddleware(reducers);
}

export default store;
