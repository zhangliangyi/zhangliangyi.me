const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].min.js',
    path: __dirname + '/build'
  },
  plugins: [
    new UglifyJSPlugin({sourceMap: true}),
    new ExtractTextPlugin('[name].min.css')
  ],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'less-loader', options: {strictMath: true, noIeCompat: true}}
        ]
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/,
        loader: 'file-loader?name=./images/[name].[ext]'
      },
      {
        test: /\.(woff2?|ttf|otf|eot|svg)$/,
        loader: 'file-loader?name=./fonts/[name].[ext]'
      }
    ]
  }
};
