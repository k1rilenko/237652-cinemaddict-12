const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public"),
  },
  devtool: "sourse-map",
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
  }
};
