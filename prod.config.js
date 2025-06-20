const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // your main JS file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'prod.js',
    clean: true, // cleans /dist before build
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // loads and injects CSS
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource', // copies images to dist
      },
      {
        test: /\.html$/i,
        loader: 'html-loader', // enables <img src="./logo.png"> in HTML
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // use your custom HTML
    }),
  ],
  devServer: {
    static: './dist',
    open: true,
  },
};
