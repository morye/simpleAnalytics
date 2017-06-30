var path = require('path');
var env = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'development';
console.log("env: ", env);

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'src/App.jsx'),
  devtool: env == "production" ? false : 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public/js'),
	publicPath: './public/js',
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/public/js/',
    historyApiFallback: true
  },
  resolve: {
    extensions:['.js','.jsx']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
		exclude: /node_modules/
      },
	  {
		test: /\.scss$/,
		loaders: "style-loader!css-loader!sass-loader"
	  }
    ]
  }
};
