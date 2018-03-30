const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'./src/index.js'
	],
	module: {
    	rules: [{
        	test: /\.(js|jsx)$/,
        	exclude: /node_modules/,
        	use: ['babel-loader']
      	}]
  	},
 	resolve: {
    	extensions: ['*', '.js', '.jsx']
  	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
    	new webpack.HotModuleReplacementPlugin()
  	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	}
};