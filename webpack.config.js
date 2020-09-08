const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const marked = require('marked');
const renderer = new marked.Renderer();

module.exports = {
	mode: 'development',
	entry: './src/app.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				// exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: { outputPath: 'css/', name: '[name].min.css' },
					},
					// Compiles Sass to CSS
					'sass-loader',
				],
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
	devServer: {
		contentBase: './dist',
		overlay: true,
		hot: true,
		historyApiFallback: true,
	},
	plugins: [
		new CopyWebpackPlugin([
			'*.html',
			{ from: path.resolve(__dirname, 'src', 'jasmine'), to: 'jasmine' },
		]),
		new webpack.HotModuleReplacementPlugin(),
	],
	resolve: {
		alias: {
			STYLES: path.resolve(__dirname, 'src/styles/'),
			JS: path.resolve(__dirname, 'src/js/'),
		},
	},
};
