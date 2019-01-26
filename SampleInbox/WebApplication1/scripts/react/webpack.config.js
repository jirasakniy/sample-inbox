
const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader"
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }
        

      ]
    },
    resolve: {
      extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".map", ".jpg", ".png", ".css", ".scss"],
      modules: [
          path.resolve('./src'),
          'node_modules'
      ]
    
  }

}