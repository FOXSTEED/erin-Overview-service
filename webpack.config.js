const path = require('path');
const Dotenv = require('dotenv-webpack');

const BUILD_DIR = path.resolve(__dirname, 'client/public');
const APP_DIR = path.resolve(__dirname, 'client/app');

const config = {
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  },
  plugins: [
    new Dotenv(),
  ],
};

const client = {
  entry: `${APP_DIR}/Overview (Main)/Overview.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
};

const server = {
  // will need to change this one
  entry: `${APP_DIR}/Overview (Main)/Overview.jsx`,
  target: 'node',
  output: {
    path: BUILD_DIR,
    filename: 'bundle-server.js',
    libraryTarget: 'commonjs-module',
  },
};

module.exports = [
  Object.assign({}, config, client),
  Object.assign({}, config, server),
];

