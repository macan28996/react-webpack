const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.tsx", // Dẫn tới file index.js ta đã tạo
  output: {
    path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
    filename: "bundle.js" // Tên file được build ra
  },
  module: {
    rules: [
      {
        test:/\.(ts|tsx|js)$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: ["babel-loader"]
      },
      {
        test: /\.css$/, // using style-loader, css-loader cho file .css
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@styles": path.resolve(__dirname, "styles"),
      "@public": path.resolve(__dirname, "public"),
    },
    extensions: [".ts", ".tsx", ".html", ".js"]
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
