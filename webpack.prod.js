const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const WriteFilePlugin = require("write-file-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    runtimeChunk: 'single',
  },
  output: {
    filename: "[name].js",
    clean: true,
    publicPath: '/'
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new CaseSensitivePathsPlugin(),  //require import chu hoa vs thuong

    new WriteFilePlugin(
      {
        // Write files that have ".ts,.tsx,.js,.css" extension.
        test: /\.(ts|tsx|js|css)$/,
        useHashIndex: true
      }
    ),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: "./public/index.html",
    })
  ]
});
