module.exports = {
	transpileDependencies: ['vuetify'],
	chainWebpack: config => {
		config.plugin('html').tap(args => {
			args[0].title = 'Board'
			return args
		})
	},
	devServer: {
		overlay: false,
		// public: '0.0.0.0:8080',
		proxy: 'https://kmwas2.azurewebsites.net/'
	},

}
