const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  debug: true,
  devtool: 'eval-source-map',
  pathinfo: true,
  entry: {
    main: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
      './client/index'
    ],
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'redux',
      'react-redux'
    ]
  },
  target: 'web',
  output: {
    path: path.resolve(process.cwd(), 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    contentBase: './client'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'client'),
      loaders: ['babel-loader']
    },{
      test: /\.scss$/,
      exclude: '/node_modules/',
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5], postcss-loader!sass')
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
    new ExtractTextPlugin('[name].css')
  ],
  postcss: function () {
    return [autoprefixer({ browsers: ['last 2 versions', 'iOS >= 7', 'ie > 9'] })];
  }
}
