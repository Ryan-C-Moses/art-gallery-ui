const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    home: "./src/index.js", // your main JS file
    location: "./src/location.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true, // cleans /dist before build
    assetModuleFilename: "images/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // loads and injects CSS
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource", // copies images to dist
      },
      {
        test: /\.html$/i,
        loader: "html-loader", // enables <img src="./logo.png"> in HTML
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html", // use your custom HTML
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      filename: "location.html",
      template: "./src/location.html",
      chunks: ["location"], // only include about.js + CSS
    }),
  ],
  devServer: {
    static: "./dist",
    open: true,
    port: 3000,
  },
};
