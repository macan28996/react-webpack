const path = require("path");

module.exports = {
  entry: "./index.tsx", // Dẫn tới file index.js ta đã tạo
  output: {
    path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
    filename: "bundle.js", // Tên file được build ra
    clean: true
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
      },
      {
        test: /\.(png|jpe?g|gif)$/i, //using file-loader images .png, .jpg, .jpeg, .gif
        loader: 'file-loader',
        options: {
          name: 'public/assets/images/[name].[ext]', //gom image vao dist/public/assets/images
        },
      },
    ]
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"), //config path file /src => @src
      "@styles": path.resolve(__dirname, "styles"),
      "@public": path.resolve(__dirname, "public"),
    },
    extensions: [".ts", ".tsx", ".html", ".js"] // tắt import example.ts => example
  }
};
