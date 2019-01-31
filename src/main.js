const { app, BrowserWindow, nativeImage } = require('electron'),
		path = require('path'),
		url = require('url'),
		installExtension = require('electron-devtools-installer').default,
		{ REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

require('electron-debug')({});

let mainWindow;

function createWindow () {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		show: false,
		titleBarStyle: 'hidden'
	});
	
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, '../dist/index.html'),
		protocol: 'file:',
		slashes: true
	}));

	mainWindow.on('ready-to-show', () => {
		mainWindow.show();
		mainWindow.focus();
	});

	mainWindow.on('closed', () => mainWindow = null );
}

app.on('ready', () => {
	[REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS].forEach(extension => {
		installExtension(extension)
			.then(name => console.log(`Added Extension: ${name}`))
			.catch(err => console.log('An error occurred: ', err));
	});
	createWindow();
});

app.on('window-all-closed', () => {
	if( process.platform !== 'darwin' )
		app.quit();
});

app.on('activate', () => {
	if( mainWindow === null )
		createWindow();
});
