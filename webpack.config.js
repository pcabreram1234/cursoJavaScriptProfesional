const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    App: "./src/App.js",
    Proxy: "./src/utils/proxys.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name]-[contenthash].js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebPackPlugin(),
    new htmlWebPackPlugin({
      filename: "proxy.html",
      template: "./exercises/proxy.html",
      inject: true,
    }),
  ],
};
