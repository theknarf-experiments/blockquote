require('./style.scss');
require('photon/sass/photon.scss');

var wrapper = document.createElement('div');
document.body.appendChild(wrapper);

import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './editor';

ReactDOM.render(
		<div className="window">
			<header className="toolbar toolbar-header">
				<h1 className="title">editor</h1>
			</header>
			<div className="window-content">
				<div className="pane-group">
					<div className="pane-sm sidebar"> sidebar </div>
					<div className="pane">
						<Editor id="editor"><p>Editor content goes here.</p></Editor>
					</div>
				</div>
			</div>
			<footer className="toolbar toolbar-footer">
				<h1 className="title"> Node.js {process.versions.node}, Chromeium {process.versions.chrome}, Electron {process.versions.electron} </h1>
			</footer>
		</div>,
		wrapper
);

