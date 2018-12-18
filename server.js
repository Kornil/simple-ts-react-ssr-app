!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=13)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("webpack")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("es6-promise/auto")},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t){e.exports=require("core-js/modules/es6.array.map")},function(e,t){e.exports=require("webpack-dev-middleware")},function(e,t){e.exports=require("webpack-hot-middleware")},function(e,t,n){(function(t){const r=n(11),o=n(3),a=n(12),i=new o.DefinePlugin({"process.env.NODE_ENV":JSON.stringify("production")}),c={entry:["isomorphic-fetch","./src/client/index.tsx"],stats:"errors-only",module:{rules:[{test:/\.tsx?$/,loader:"babel-loader"},{enforce:"pre",test:/\.js$/,loader:"source-map-loader"},{test:/\.scss$/,loader:"style-loader!css-loader!sass-loader"}]},resolve:{extensions:[".js",".ts",".tsx"]},output:{filename:"bundle.js",path:r.join(t,"/build"),publicPath:"/"},mode:"production",plugins:[i]},l={entry:r.join(t,"src/server/index.ts"),target:"node",externals:[a()],resolve:{extensions:[".js",".ts",".tsx"],alias:{app:r.resolve(t,"src/client/")}},stats:"errors-only",output:{path:t,filename:"server.js",publicPath:"/"},mode:"production",module:{rules:[{test:/\.tsx?$/,exclude:/node_modules/,loader:"babel-loader"}]}};e.exports=[c,l]}).call(this,"/")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("webpack-node-externals")},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),i=n(1),c=(n(5),n(6),n(2)),l=n.n(c),s=(n(7),function(e){var t=e.code,n=e.children;return o.a.createElement(i.Route,{render:function(e){var r=e.staticContext;return r&&(r.statusCode=t),n}})}),u=[{Component:function(e){return o.a.createElement("div",null,o.a.createElement("h2",null,"Home Page"),o.a.createElement("p",null,"Hello ",e.user))},exact:!0,path:"/"},{Component:function(){return o.a.createElement(s,{code:404},o.a.createElement("p",null,"This is not the web page you are looking for."))}}],p=function(){var e=u.map(function(e,t){var n=e.Component,r=e.exact,a=e.path;return o.a.createElement(i.Route,{exact:r,path:a,component:n,key:t})});return o.a.createElement(i.Switch,null,e)},d=function(){return o.a.createElement("main",{className:"container"},o.a.createElement(p,null))},m=function(e){return'\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <title>A simple react ts app</title>\n  <base href="/">\n\n  <meta name="mobile-web-app-capable" content="yes">\n  <meta name="theme-color" content="#ffffff">\n  <meta name="application-name" content="simple-react-ts-app">\n  <meta name="Description" content="simple-react-ts-app">\n\n  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">\n\n  <script src="/bundle.js" defer><\/script>\n\n  <style>\n    html,\n    body,\n    #root {\n      margin: 0;\n      height: 100%;\n    }\n  </style>\n\n</head>\n\n<body>\n<div id="root">'.concat(e,"</div>\n</body>\n\n</html>\n")},f=(n(3),n(8),n(9),n(10),l()());f.use(l.a.static("build")),f.get("*",function(e,t){var n={},r=Object(a.renderToString)(o.a.createElement(i.StaticRouter,{location:e.url,context:n},o.a.createElement(d,null)));n.url&&(t.writeHead(301,{Location:n.url}),t.end()),t.send(m(r))});f.listen(3e3,function(){console.log("Example app listening on port ".concat(3e3,"!"))})}]);