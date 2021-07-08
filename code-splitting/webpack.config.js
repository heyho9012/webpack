var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none', // production, development, none
  entry: './src/index.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    // loader : right -> left
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader',
        ],
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  watch: true,
  plugins: [
    new MiniCssExtractPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 5050,
      files: ['./dist/*.html', './dist/*.css', './dist/*.js'],
      server: {
        baseDir: ['dist']
      }
    }),
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "./src/index.html", //Name of template in ./src
      hash: true
    }),
  ],
} 