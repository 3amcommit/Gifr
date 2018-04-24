var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  devServer: {
    port: 3000,
  },

  entry: {
    app: ["./src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".js"]
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }]
  },
  resolve: {
    alias: {
      jquery: "jquery/src/jquery"
    }
  }
};