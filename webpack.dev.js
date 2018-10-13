const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const DIST_DIR = path.join(__dirname, 'dist');

module.exports = merge(common, {
  mode: 'development',
  // devtool: 'inline-source-map', // breakpoint don't work
  devtool: 'cheap-module-eval-source-map', // breakpoints and HMR
  devServer: {
    contentBase: DIST_DIR,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].[hash].js',
  },
});
