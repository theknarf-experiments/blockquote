const webpack = require('webpack'),
		path = require('path'),
		HtmlWebpackPlugin = require('html-webpack-plugin'),
		HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin'),
		ManifestPlugin = require('webpack-manifest-plugin'),
		CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );

const { styles } = require( '@ckeditor/ckeditor5-dev-utils' );

var config = {
	entry: {
		renderer: './src/renderer.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
			{ test: /\.svg$/, use: 'raw-loader' },
			{ test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
			{ test: /\.(eot|ttf|woff|woff2)$/, loader: 'file-loader?name=fonts/[name].[ext]' },
			{
				test: /ckeditor5-[^/]+\/theme\/[\w-/]+\.css$/,
				use: [
					{ loader: 'style-loader', options: { singleton: true } },
					{
						loader: 'postcss-loader',
						options: styles.getPostCssConfig({
							themeImporter: {
								themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
							},
							minify: true
						})
					},
				]
			}
		]
	},
	plugins: [
		new CKEditorWebpackPlugin({
			// See https://docs.ckeditor.com/ckeditor5/latest/features/ui-language.html
			language: 'en'
		}),
		new HtmlWebpackPlugin({
			chunks: ['renderer'],
			inlineSource: '.(js|css)$'
		}),
		new HtmlWebpackInlineSourcePlugin(),
		new ManifestPlugin(),
	],
	target: 'electron-renderer',
	devtool: '#inline-source-map',
	node: {
		__dirname: false,
		__filename: false
	},
};

module.exports = config;
