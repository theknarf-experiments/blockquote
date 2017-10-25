const webpack = require('webpack'),
		path = require('path'),
		UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
		CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		main: './src/main.js',
		renderer: './src/renderer.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			options: {
				presets: ['env']
			}
		},
		{
			test: /\.svg$/,
			use: [ 'raw-loader' ]
		},
		{
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}
		]
	},
	plugins: [
		new UglifyJSPlugin(),
		new CopyWebpackPlugin([
				{ from: './src/index.html' }
		]),
	],
	target: 'electron',
	devtool: 'source-map',
	node: {
		__dirname: false,
		__filename: false
	},
};
