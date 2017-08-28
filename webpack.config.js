const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ETP = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index.js')
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.map'
  },

  devtool: '#source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }, {
        test: /\.(css|scss|sass)$/,
        loader: ETP.extract({fallback: 'style-loader', use: 'css-loader?minimize!postcss-loader!sass-loader'}),
        include: path.join(__dirname, 'assets', 'scss')
      }, {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
        include: path.join(__dirname, 'assets', 'img')
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    stats: 'errors-only',
    hot: true,
    historyApiFallback: true

  },

  resolve: {
    alias: {
      'styles': path.resolve(__dirname, 'assets/scss/')
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      hash: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ETP('styles.css')
  ]

}