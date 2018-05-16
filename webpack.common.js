const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')

module.exports = {
  entry: {
    main: path.resolve('./src/index.js')
  },
  resolve: {
    modules: ['src', 'node_modules']
  },
  output: {
    filename: 'resources/js/[name].[hash].js',
    path: path.resolve('./dist/')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: ['node_modules'],
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        test: /\.js$/,
        exclude: ['node_modules'],
        loader: [
          'babel-loader'
        ]
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff2?|ttf|otf|eot|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: 'resources/fonts/',
          outputPath: 'resources/fonts/'
        }
      },
      {
        test: /\.(gif|jpg|jpeg|tiff|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: 'resources/images/',
              outputPath: 'resources/images/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html'
    }),
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: "resources/css/[hash].css",
      chunkFilename: "resources/css/[id].[hash].css"
    })
  ]
}
