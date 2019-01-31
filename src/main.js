const {app, BrowserWindow, nativeImage} = require('electron');
require('electron-debug')({});

const path = require('path'),
		url = require('url');

let mainWindow;

function createWindow () {
	//require('devtron').install();

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
	//mainWindow.loadURL('http://localhost:8080/');

	mainWindow.on('ready-to-show', function() {
		mainWindow.show();
		mainWindow.focus();
	});

	mainWindow.on('closed', function () { mainWindow = null });
}

const installExtension = require('electron-devtools-installer').default;
const { REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

app.on('ready', () => {
	[REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS].forEach(extension => {
		installExtension(extension)
			.then((name) => console.log(`Added Extension: ${name}`))
			.catch((err) => console.log('An error occurred: ', err));
	}); //*/
	createWindow();
});

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin')
		app.quit();
});

app.on('activate', function () {
	if (mainWindow === null)
		createWindow();
});
