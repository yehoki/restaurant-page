const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    webpage: './src/webpage.js',
    home: './src/home.js',
    about: './src/about.js',
    menu: './src/menu.js',
  },
  devtool: 'inline-source-map',
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
     ],
   },
};