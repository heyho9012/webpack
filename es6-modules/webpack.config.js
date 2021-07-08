// webpack.config.js

var path = require('path');

module.exports = {
	mode: 'production',
	entry: './js/app.js',
  // entry => webpack에서 웹 자원을 변환하기 위해 필요한 최초 진입점이자 자바스크립트 파일 경로
	output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'main.bundle.js'
	},
  // output => webpack을 돌리고 난 결과물의 파일 경로(path)와 파일 이름(filename)
	module: {
		rules: [{
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
        // loader => webpack이 web application을 해석할 때 웹자원들을 변환 할 수 있도록 도와주는 속성
				options: {
          presets: ['@babel/preset-env']
				}
			}
		}]
	},
	stats: {
			colors: true
	},
	devtool: 'source-map'
};