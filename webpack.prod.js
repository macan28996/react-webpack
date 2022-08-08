const path = require("path");
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const WriteFilePlugin = require("write-file-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(scss|sass)$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
      ]
    }]
  },
  plugins: [
    // nó sẽ clean thư mục`dist/js & dist/css` trước khi build
    new CaseSensitivePathsPlugin(),  //require import chu hoa vs thuong

    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['dist/js', 'dist/css'],
    }),
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
    // nó sẽ minify file css
    new MiniCssExtractPlugin({
      filename: "css/index.css"
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack React Example',
      inject: false,
      template: "./public/index.html",
      meta: [{
        name: 'description',
        content: 'A better default template for html-webpack-plugin.'
      }],
      mobile: true,
    })
  ]
});
