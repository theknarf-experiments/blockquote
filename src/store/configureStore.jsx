import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//import promiseMiddleware from 'redux-promise';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(thunk),
//  applyMiddleware(promiseMiddleware),
)(createStore);

export default function(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
		 var nextReducer = require('./reducer').default;
		 store.replaceReducer(nextReducer);
    });
  }

  return store;
}

