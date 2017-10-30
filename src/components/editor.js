import React from 'react';
import ReactDOM from 'react-dom';

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import List from '@ckeditor/ckeditor5-list/src/list';
import Link from  '@ckeditor/ckeditor5-link/src/link';
import Blockquote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Autoformater from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import GFMDataProcessor from '@ckeditor/ckeditor5-markdown-gfm/src/gfmdataprocessor';

// Simple plugin which loads the data processor.
function Markdown( editor ) {
    editor.data.processor = new GFMDataProcessor();
}

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
				 plugins: [
					 Autoformater,
					 Markdown,
					 Essentials,
					 Paragraph,
					 Heading,
					 Bold, Italic, Underline, Code,
					 Link,
					 List,
					 Blockquote
				 ],
				 toolbar: [ 'headings', 'bold', 'italic', 'underline', 'code', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo'],
				 /*heading: {
					 options: [
					 { modelElement: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
					 { modelElement: 'heading1', viewElement: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
					 { modelElement: 'heading2', viewElement: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
					 ]
				 }*/
			 } )
		.then( editor => {
			console.log( 'Editor was initialized', editor );

			if(typeof this.props.getEditor == 'function') {
				this.props.getEditor(editor);
			}
		} )
		.catch( error => {
			console.error( "Editor error", error.stack );
		} );
	}
}
