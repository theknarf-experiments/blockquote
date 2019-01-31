import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.jsx';
import App from './components/app';

import './style/style.scss';
import './style/photon/photon.scss';

const wrapper = document.createElement('div');
document.body.appendChild(wrapper);

const store = configureStore();

render(
	<Provider store={store}>
		<App />
	</Provider>,
	wrapper
);
