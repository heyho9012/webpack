// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require('path');
// Use node.js path library

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};



// ***** path.resolve() *****
// path.resolve('/foo/bar', './baz');
// Returns: '/foo/bar/baz'

// path.resolve('/foo/bar', '/tmp/file/');
// Returns: '/tmp/file'


/* 웹팩의 등장배경
  * 1. 파일 단위의 자바스크립트 모듈 관리의 필요성
  * 2. 웹 개발 작업 자동화 도구 (Web Task Manager)
  * 3. 웹 애플리케이션의 빠른 로딩 속도와 높은 성능
*/