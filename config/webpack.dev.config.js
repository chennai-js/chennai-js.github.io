const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("../webpack.common.config");

module.exports = merge(common, {
  devtool: "cheap-module-eval-source-map",
  mode: "development",
  optimization: {
    usedExports: true
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
