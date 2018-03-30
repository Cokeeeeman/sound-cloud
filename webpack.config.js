const path = require('path');

module.exports = {
	entry: [
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
		contentBase: './dist'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	}
};