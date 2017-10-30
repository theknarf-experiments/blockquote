import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './editor';
import List from './list';

const App = ({
        children
}/*, {store}*/) => {
	var editor = null;
	var markdownDiv = null;
	const boldOnClick = () => {
		if(editor !== null)
			editor.commands.get('bold').execute();
	};
	const italicOnClick = () => {
		if(editor !== null)
			editor.commands.get('italic').execute();
	};

	return (
		<div className="window">
			<header className="toolbar toolbar-header">
				<div className="toolbar-actions" style={{ marginLeft: "80px" }}>
				 <div className="btn-group">
					<button className="btn btn-default">
					  <span className="icon icon-home"></span>
					</button>
					<button className="btn btn-default">
					  <span className="icon icon-folder"></span>
					</button>
					<button className="btn btn-default active">
					  <span className="icon icon-cloud"></span>
					</button>
				 </div>

				 <button className="btn btn-default btn-dropdown">
					Aa	
				 </button>

				 <div className="btn-group">
					<button className="btn btn-default" onClick={boldOnClick}><b>B</b></button>
					<button className="btn btn-default" onClick={italicOnClick}><i>I</i></button>
					<button className="btn btn-default underline">U</button>
				 </div>

				 <div className="btn-group">
					<button className="btn btn-default"><span className="icon icon-code" /></button>
					<button className="btn btn-default"><span className="icon icon-link" /></button>
					<button className="btn btn-default"><span className="icon icon-quote" /></button>
				 </div>

				 <button className="btn btn-default btn-dropdown pull-right">
					<span className="icon icon-megaphone"></span>
				 </button>
			  </div>
			</header>
			<div className="window-content">
				<div className="pane-group">
					<div className="pane-sm sidebar">
						<List />
					</div>
					<div className="pane">
						<Editor id="editor" getEditor={(e) => {
							editor=e;
							editor.document.on( 'changesDone', () => {
								if(markdownDiv !== null)
									 markdownDiv.innerHTML = editor.getData();
							} );
						}}><p>Editor content goes here.</p></Editor>
						<pre ref={div => markdownDiv = div}>Markdown goes here</pre>
					</div>
				</div>
			</div>
			<footer className="toolbar toolbar-footer">
				<div className="toolbar-actions">
					<button className="btn btn-default">New</button>
					<span> Node.js {process.versions.node}, Chromeium {process.versions.chrome}, Electron {process.versions.electron} </span>
				</div>
			</footer>
		</div>
	);
};

/*
App.contextTypes = {
	store: React.PropTypes.object
};
//*/

export default App;