var webpack = require('webpack');
module.exports = {
  entry:[
  'webpack-dev-server/client?http://127.0.0.1:3003', // WebpackDevServer host and port
  'webpack/hot/only-dev-server',
    './assets/js/entry.js'
  ],
  output: {
    path: __dirname+"/assets/",
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

module: {
   loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx?$/, loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/ },
      { test: /\.js?$/, loaders: ['react-hot', 'jsx-loader?harmony'], exclude: /node_modules/ },
      { test: /\.html?$/, loaders: ['react-hot', 'jsx-loader?harmony'], exclude: /node_modules/ }

    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
