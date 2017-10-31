const webpack = require('webpack'),
		path = require('path'),
		UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
		CopyWebpackPlugin = require('copy-webpack-plugin'),
		HtmlWebpackPlugin = require('html-webpack-plugin'),
		HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin'),
		DeleteChunksPlugin = require('./DeleteChunksPlugin'),
		ManifestPlugin = require('webpack-manifest-plugin'),
		ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
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
				presets: ['env', 'react']
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
		},
		{
			test: /\.(eot|ttf|woff|woff2)$/,
			loader: 'file-loader?name=fonts/[name].[ext]'
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
		new ManifestPlugin(),
	],
	target: 'electron',
	devtool: '#inline-source-map',
	node: {
		__dirname: false,
		__filename: false
	},
};

if(process.env.devserver !== 'yes')
	config.plugins.push(new DeleteChunksPlugin({ chunks: ['renderer'] }));
else
	delete config.entry.main;

module.exports = config;
