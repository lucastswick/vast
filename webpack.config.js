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
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
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
		],
	},
	devServer: {
		contentBase: './dist',
		overlay: true,
		hot: true,
		historyApiFallback: true,
		contentBase: path.join(__dirname, 'assets'),
	},
	plugins: [
		new CopyWebpackPlugin(['index.html']),
		new webpack.HotModuleReplacementPlugin(),
	],
	resolve: {
		alias: {
			STYLES: path.resolve(__dirname, 'src/styles/'),
			JS: path.resolve(__dirname, 'src/js/'),
		},
	},
};
