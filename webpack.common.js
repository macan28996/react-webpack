const path = require("path");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
        test: /\.(png|jpeg|jpg|gif|tiff|ai|psd|pdf|eps|heic|raw|svg)$/i, //using file-loader and url loader images
        loader: "file-loader",
        options: {
          name: 'public/assets/images/[name].[ext]', //gom image vao dist/public/assets/images
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'url-loader'],
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
  },
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
  ]
};
