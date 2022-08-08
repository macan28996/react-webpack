const webpack = require('webpack');
const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");

// nó ghép với file webpack`webpack.common.js` đã cấu hình cơ bản để sử dụng.
module.exports = merge(common, {
  // môi trường : development
  mode: 'development',

  //  nó sẽ hiển thị lỗi ở đâu (vì khi lỗi nó sẽ hiển thị ở file đã build trong folder dist
  // mà khi build là cú pháp js5 cái ta cần là chính xác lỗi chỗ nào,
  // đó là lý do bạn nên để 'inline-source-map'
  devtool: 'inline-source-map',
  module: {
    // các file scss được loader bởi style-loader, css-loader, sass-loader
    rules: [{
      test: /\.(scss|sass)$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }]
  },
  plugins: [
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
    new CaseSensitivePathsPlugin(),  //require import chu hoa vs thuong
    new WriteFilePlugin(
      {
        // Write files that have ".ts,.tsx,.js,.css" extension.
        test: /\.(ts|tsx|js|css)$/,
        useHashIndex: true
      }
    ),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"  // create file html build, toi uu su dung
    })
  ]
})
