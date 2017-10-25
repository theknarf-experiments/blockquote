const webpack = require('webpack'),
		path = require('path'),
		UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
		CopyWebpackPlugin = require('copy-webpack-plugin'),
		HtmlWebpackPlugin = require('html-webpack-plugin'),
		HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin'),
		DeleteChunksPlugin = require('./DeleteChunksPlugin');

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
		new HtmlWebpackPlugin({
			chunks: ['renderer'],
			inlineSource: '.(js|css)$'
		}),
		new HtmlWebpackInlineSourcePlugin(),
		new DeleteChunksPlugin({ chunks: ['renderer'] }),
	],
	target: 'electron',
	devtool: 'source-map',
	node: {
		__dirname: false,
		__filename: false
	},
};
