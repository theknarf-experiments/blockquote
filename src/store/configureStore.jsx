import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import reducer from './reducer';

// Current Redux devtools does not work with the Redux 4
// See: https://github.com/reduxjs/redux-devtools/issues/391
// Thats why I'm adding `&& false` on the end to disable redux devetools until it is fixed
const createStoreWithMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__ && false
	? compose(
		applyMiddleware(thunk),
		applyMiddleware(promiseMiddleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)(createStore)
	:  compose(
		applyMiddleware(thunk),
		applyMiddleware(promiseMiddleware)
	)(createStore)

export default function(initialState = {}) {
  const store = createStoreWithMiddleware(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
		 var nextReducer = require('./reducer').default;
		 store.replaceReducer(nextReducer);
    });
  }

  return store;
};
