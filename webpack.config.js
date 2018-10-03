const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const DIST_DIR = path.join(__dirname, 'dist');
const NODE_MODULES = path.join(__dirname, 'node_modules');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].[hash].js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [NODE_MODULES],
        use: [
          'style-loader',
          'css-loader?sourceMap'
        ]
      }
    ]
  }
};
