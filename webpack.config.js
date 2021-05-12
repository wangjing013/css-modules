const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
              }
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
}

