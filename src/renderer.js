import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
require('./style.scss');

var editorEl = document.createElement('div');
document.body.appendChild(editorEl);

document.write( "Node.js " + process.versions.node );
document.write( ", Chromium " + process.versions.chrome );
document.write( ",and Electrion " + process.versions.electron );

ClassicEditor
    .create( editorEl, {
        plugins: [ Essentials, Paragraph, Bold, Italic ],
        toolbar: [ 'bold', 'italic' ]
    } )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        console.error( error.stack );
    } );
