const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const marked = require('marked');
const renderer = new marked.Renderer();

module.exports = {
	entry: {
		app: './src/app.js',
	},
	plugins: [
		new CopyWebpackPlugin([
			'*.html',
			{ from: path.resolve(__dirname, 'src', 'jasmine'), to: 'jasmine' },
		]),
		// new webpack.HotModuleReplacementPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
			},
			{
				test: /\.md$/,
				use: [
					{
						loader: 'html-loader',
					},
					{
						loader: 'markdown-loader',
						options: {
							pedantic: true,
							renderer,
						},
					},
				],
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-object-rest-spread'],
					},
				},
			},
		],
	},
	output: {
		filename: 'main.bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		alias: {
			STYLES: path.resolve(__dirname, 'src/styles/'),
			JS: path.resolve(__dirname, 'src/js/'),
		},
	},
};
