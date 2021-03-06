import React from 'react';

import CKEditor from '@ckeditor/ckeditor5-react';

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

const Editor = ({ data, getEditor }) =>
	<CKEditor
		editor={ ClassicEditor }
		data={ data }
		config={{
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
			toolbar: [ 'headings', 'bold', 'italic', 'underline', 'code', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo']
		}}
		onInit={ getEditor }
		/>;

export default Editor;
