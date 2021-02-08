const path = require('path');

const marked = require('marked');
const renderer = new marked.Renderer();

module.exports = {
	entry: {
		app: './src/js/vast.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		hot: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
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
		filename: 'vast.js',
		path: path.resolve(__dirname, 'dist/js'),
	},
	resolve: {
		alias: {
			STYLES: path.resolve(__dirname, 'src/styles/'),
			JS: path.resolve(__dirname, 'src/js/'),
		},
	},
};
