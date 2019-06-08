const Path = require("path");
const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BabiliWebpackPlugin = require("babili-webpack-plugin");

const SOURCE = Path.resolve(__dirname, "src");
const OUTPUT = Path.resolve(__dirname, "dist");

module.exports = {
  entry: SOURCE + "/index.js",
  output: {
    path: OUTPUT,
    publicPath: "./",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader"
        }),
        include: SOURCE
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        include: SOURCE
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: "file-loader?name=images/[name]__[hash:base64:5].[ext]",
        include: SOURCE
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader?name=fonts/[name]__[hash:base64:5].[ext]",
        include: SOURCE
      }
    ]
  },
  target: "electron-renderer",
  plugins: [
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new Webpack.ProvidePlugin({
      "window.jQuery": "jquery",
      "window.$": "jquery",
      "jQuery": "jquery",
      "$": "jquery"
    }),
    new HtmlWebpackPlugin({
      "title": "yoyo"
    }),
    new ExtractTextPlugin("bundle.css"),
    new BabiliWebpackPlugin()
  ],
  stats: {
    colors: true,
    children: false,
    chunks: false,
    modules: false
  },
};
