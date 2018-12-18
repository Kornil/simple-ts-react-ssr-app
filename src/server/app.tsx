import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import "es6-promise/auto";
import "isomorphic-fetch";

import express from "express";

import App from "app/App";

import htmlMarkup from "./htmlMarkup";

// webpack stuff for hot-reload
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
// @ts-ignore
import webpackConfig from "../../webpack.config";

const app = express();

/* istanbul ignore next */
if (process.env.NODE_ENV === "development") {
  const compiler = webpack(webpackConfig[0]);
  app.use(
    webpackDevMiddleware(compiler, {
      // noInfo: true,
      publicPath: webpackConfig[0].output.publicPath
    })
  );
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static("build"));

interface ContextInterface {
  url?: string;
  statusCode?: number;
}

app.get("*", (req, res) => {
  const context: ContextInterface = {};
  const markup = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  /* istanbul ignore next */
  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  }
  res.send(htmlMarkup(markup));
});

export default app;
