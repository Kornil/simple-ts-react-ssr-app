const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

const dev = process.env.NODE_ENV !== "production";

const DefinePluginConfig = new webpack.DefinePlugin({
  "process.env.NODE_ENV": JSON.stringify("production")
});

const hotReloadMiddlewares = [
  "react-hot-loader/patch",
  "webpack-hot-middleware/client"
];

const clientConfig = {
  entry: dev
    ? ["isomorphic-fetch", ...hotReloadMiddlewares, "./src/client/index.tsx"]
    : ["isomorphic-fetch", "./src/client/index.tsx"],
  stats: dev ? "normal" : "errors-only",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/build"),
    publicPath: dev ? "http://localhost:3000/build/" : "/"
  },
  mode: dev ? "development" : "production",
  plugins: dev
    ? [new webpack.HotModuleReplacementPlugin()]
    : [DefinePluginConfig]
};

const serverConfig = {
  entry: path.join(__dirname, "src/server/index.ts"),
  target: "node",
  externals: [nodeExternals()],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      app: path.resolve(__dirname, "src/client/")
    }
  },
  stats: dev ? "normal" : "errors-only",
  output: {
    path: __dirname,
    filename: "server.js",
    publicPath: "/"
  },
  mode: dev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};

module.exports = [clientConfig, serverConfig];
