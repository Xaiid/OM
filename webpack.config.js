const path = require('path');

module.exports = {
  entry: [path.join(__dirname, 'src', 'js', 'app.js')],
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: path.join('build', 'build.js'),
    path: path.resolve(__dirname, 'build'),
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[path]--[name]--[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({ browsers: ['last 2 versions'] })
              ]
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map'
};
