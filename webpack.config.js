const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const path = require('path')

module.exports = {
  mode:'development',
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext]',
    clean: true
  }, 
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use:  [
                MiniCssExtractPlugin.loader, 
                'css-loader',
                'sass-loader'
              ]
      },
      {
        test: /\.(png|jpe?g|ico|gif)/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../index.html'
    }),
    new MiniCssExtractPlugin(),
    new EslintWebpackPlugin()
  ],
  devServer: {
    port: 6392,
    hot: true,
    open: true
  }
}