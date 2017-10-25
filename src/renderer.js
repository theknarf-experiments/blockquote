import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
require('./style.scss');
require('photon/sass/photon.scss');

var wrapper = document.createElement('div');
wrapper.innerHTML = '<div class="window"> <header class="toolbar toolbar-header"><h1 class="title">Header</h1></header><div class="window-content"><div class="pane-group"><div class="pane-sm sidebar">sidebar</div><div class="pane" id="editor">main</div></div></div><footer class="toolbar toolbar-footer"><h1 class="title">Footer</h1></footer></div>'; 
document.body.appendChild(wrapper);

/*
document.write( "Node.js " + process.versions.node );
document.write( ", Chromium " + process.versions.chrome );
document.write( ",and Electrion " + process.versions.electron );
*/

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
