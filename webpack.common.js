const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const cssnano = require('cssnano');
const autoprefixer =  require('autoprefixer');

const DIST_DIR = path.join(__dirname, 'dist');
const NODE_MODULES = path.join(__dirname, 'node_modules');

const isDevMode = process.env.NODE_ENV !== 'production';

console.log('NODE_ENV: ', process.env.NODE_ENV);
console.log('isDevMode: ', isDevMode);

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(DIST_DIR),
    new HtmlWebpackPlugin({
      title: 'Maze Generator'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].css',
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: DIST_DIR
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [NODE_MODULES],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: [NODE_MODULES],
        use: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {loader: 'css-loader?sourceMap', options: {importLoaders: 1}},
          {
            loader: 'postcss-loader?sourceMap', options: {
              ident: 'postcss',
              plugins: () => [
                postcssPresetEnv(),
                postcssImport(),
                cssnano(),
                // autoprefixer() // seems that preset-end is already taking care
              ]
            }
          },
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};
