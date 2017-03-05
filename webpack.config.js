//The declaration of the object having all the Webpack-related configuration details
module.exports = {
	//entry point of the application
	entry: "./js/source/index.js",
	output: {
		filename: "./js/build/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]	
	},

}
