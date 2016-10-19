var webpack = require('webpack');
// 使用definePlugin来进行生产环境打包, 安装if-env module来指定npm start的环境判定
// 在express中使用compression中间件来进行gzip压缩
module.exports = {
	entry: {
		'main': './main.js',
		'vendor': ['react', 'react-router', 'react-dom']
	},
	output: {
		path: 'build',
		filename: 'index.bundle.js',
		chunkFileName: 'vendor.min.js',
		publicPath: 'build' // 添加publicPath, 进行生产发布打包
	},
	devServer: {
		inline: true, // 添加了inline true后就可以自动刷新了, 这里的自动刷新并不是利用了livereload, 而是用了iframe嵌入,并刷新iframe的方式
		port: 3333,
		static: './'
		// 在npm start 中指定 webpack-dev-server --content-base . --history-api-fallback
		// --content-base .指定的目录为根目录
		// 可以给--contente-base 指定目录为 public目录
		// 然后给webpack.config.js 指定 {output: {path: 'public', publicPath: 'public'}}即可
		// 就可以使用 browserHistory 并且刷新浏览器页面保持不变了
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules' // 添加了modules参数, 可以打开css modules功能
			}
		]
	},
		plugins: process.env.NODE_ENV === 'production' ? [ // 生产环境下进行一系列的优化, 开发环境下不变
	    new webpack.optimize.DedupePlugin(),
	    new webpack.optimize.OccurrenceOrderPlugin(),
	    new webpack.optimize.UglifyJsPlugin(),
	    // new webpack.DefinePlugin({ // 指定生产环境和开发环境
	    //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
	    // })
			new webpack.DefinePlugin({ // 指定生产环境和开发环境
			    'process.env.NODE_ENV': JSON.stringify('production')
			}),
			// 将vendor文件单独打包
			new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.min.js')
	  ] : [
	  	new webpack.DefinePlugin({
	  		'process.env.NODE_ENV': JSON.stringify('development')
	  	}),
	  	new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.min.js')
	  ]
}