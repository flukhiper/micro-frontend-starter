const webpack = require('webpack')
const defaultConfig = require('./default.config')

module.exports = {
  entry: './src/app.js',
  module: defaultConfig,
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};