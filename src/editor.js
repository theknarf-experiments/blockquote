import React from 'react';
import ReactDOM from 'react-dom';

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

export default class Editor extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return <div id={this.props.id}>{this.props.children}</div>;
	}

	shouldComponentUpdate() { return false; }

	componentDidMount() {
		ClassicEditor
			 .create( document.querySelector( "#" + this.props.id ), {
				  plugins: [ Essentials, Paragraph, Bold, Italic ],
				  toolbar: [ 'bold', 'italic' ]
			 } )
			 .then( editor => {
				  console.log( 'Editor was initialized', editor );
			 } )
			 .catch( error => {
				  console.error( "Editor error", error.stack );
			 } );
	}
}
