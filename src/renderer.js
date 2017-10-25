import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
require('./style.scss');
require('photon/sass/photon.scss');

var wrapper = document.createElement('div');
document.body.appendChild(wrapper);

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
		<div className="window">
			<header className="toolbar toolbar-header">
				<h1 className="title">editor</h1>
			</header>
			<div className="window-content">
				<div className="pane-group">
					<div className="pane-sm sidebar"> sidebar </div>
					<div className="pane">
						<div id="editor"><p>Editor content goes here.</p></div>
					</div>
				</div>
			</div>
			<footer className="toolbar toolbar-footer">
				<h1 class="title"> Node.js {process.versions.node}, Chromeium {process.versions.chrome}, Electron {process.versions.electron} </h1>
			</footer>
		</div>,
		wrapper
);

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ Essentials, Paragraph, Bold, Italic ],
        toolbar: [ 'bold', 'italic' ]
    } )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        console.error( error.stack );
    } );
