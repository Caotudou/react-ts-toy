const path = require('path');

module.exports = {
  entry: './app.ts',
  devtool: "inline-source-map",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve:{
    extensions:[".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
};