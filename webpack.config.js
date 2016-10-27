var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); //自动打开浏览器插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	//webpack-dev-server入口目录设置
	devServer: {
		contentBase: "./src/html"
  },
	entry: {
		index: './src/js/index.js'
	},
	output: {
		path: './dist',
		publicPath: '/dist/',
		filename: 'js/index.js'
	},
	module: {
    loaders: [{
    		test: /\.css$/,
    		loader: ExtractTextPlugin.extract('style', 'css') 
    	}, { 
    		test: /\.less$/, 
    		loader: ExtractTextPlugin.extract('css!less') 
    	}, {
	      test: /\.js$/,
	      exclude: /node_modules/,
	      loaders: ['react-hot-loader/webpack', 'babel?presets[]=react,presets[]=es2015']
    	}
    ]
  },
  plugins: [
  	new ExtractTextPlugin("css/bundle.css"),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
};