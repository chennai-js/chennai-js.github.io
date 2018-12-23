const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("../webpack.common.config");

module.exports = merge(common, {
  devtool: "source-map",
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
});
