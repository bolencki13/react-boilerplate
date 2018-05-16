const merge = require('webpack-merge')
const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsWebpackPlugin({
        parallel: true
      }),
      new OptimizeCSSAssetsWebpackPlugin({})
    ]
  },
})
