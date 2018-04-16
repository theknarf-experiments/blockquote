require('./style/style.scss');
require('./style/photon/photon.scss');

var wrapper = document.createElement('div');
document.body.appendChild(wrapper);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import configureStore from './store/configureStore.jsx';
import { Provider } from 'react-redux';

var store = configureStore();
const Renderer = () => {
	ReactDOM.render(<Provider store={store}><App /></Provider>, wrapper);
};
Renderer();
store.subscribe(Renderer);
