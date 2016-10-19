import React from 'react'
// we'll use this to render our app to an html string
import { renderToString } from 'react-dom/server'
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router'
import routes from '../with_react_router/routes'

var express = require('express');
var serverRoutes = express.Router();

serverRoutes.get('*', (req, res)=> {
		// router在浏览器端和服务端实现共享, 浏览器端实现自己的逻辑,
		// 服务端则同样可以享用react的路由, 来同步req.url和react的props进行数据处理
		match({ routes: routes, location: req.url }, (err, redirect, props) => {
			const appHtml = renderToString(<RouterContext {...props} />);
			console.log(req.url);
			res.send(renderPage(appHtml));
		});
});

function renderPage(appHtml) {
	return `
		<!doctype html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=0 max-scale=1.0">
			<title>Hello React</title>
			<style type="text/css">
				.color-box {
					width: 80px;
					height: 80px;
				}
			</style>
		</head>
		<body>
			<div id="app">${appHtml}</div>
			<script type="text/javascript" src="/index.bundle.js"></script>
		</body>
		</html>
	`
}

module.exports = serverRoutes