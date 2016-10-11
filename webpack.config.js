module.exports = {
	entry: './main.js',
	output: {
		path: './',
		filename: 'index.bundle.js'
	},
	devServer: {
		inline: true, // 添加了inline true后就可以自动刷新了, 这里的自动刷新并不是利用了livereload, 而是用了iframe嵌入,并刷新iframe的方式
		port: 3333,
		static: './'
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
	}
}