const path = require('path');

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, 'src', 'js', 'app.js')],
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: path.join('build', 'build.js'),
    path: path.resolve(__dirname, 'build'),
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.sass', '.gif'],
    modules: [
      path.resolve(__dirname, 'images'),
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules')
    ],
    alias: {
      // so we can @import '~styles/base.sass'
      styles: path.resolve(__dirname, 'src', 'styles')
    }
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader'
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react']
            }
          }
        ]
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
      },
      {
        test: /\.sass$/,
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
          },
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
              sourceMap: true,
              sourceMapContents: true
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      }
    },
    inline: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    }
  }
};
