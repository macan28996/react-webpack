const webpack = require('webpack');
const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");

module.exports = merge(common, {
  // development
  mode: 'development',
  devtool: 'inline-source-map',

  plugins: [
    new CaseSensitivePathsPlugin(),  //require import chu hoa vs thuong

    new CopyPlugin({
      patterns: [
        {
          //copy directory public/assets ==> build/public/assets
          from: path.resolve('public/assets'),
          to: path.resolve('build/public/assets'),
          toType: 'dir',
        },
      ],
    }),
    new WriteFilePlugin(
      {
        // Write files that have ".ts,.tsx,.js,.css" extension.
        test: /\.(ts|tsx|js|css)$/,
        useHashIndex: true
      }
    ),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: "./public/index.html"  // create file html build, toi uu su dung
    })
  ]
})
