/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	// 通过webpack对server.js进行打包, 使得服务端也可以使用es6的各种强大语法

	// import some new stuff
	var express = __webpack_require__(1);
	var path = __webpack_require__(2);
	var compression = __webpack_require__(3);
	var serverRoutes = __webpack_require__(4);
	var app = express();

	// gzip 压缩
	app.use(compression());
	// 指定静态文件目录
	app.use(express.static(path.join(__dirname, 'build')));

	app.use('/', serverRoutes);

	var PORT = process.env.PORT || 8088;

	// 监听端口
	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost:' + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(6);

	var _reactRouter = __webpack_require__(7);

	var _routes = __webpack_require__(8);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// and these to match the url to routes and then render
	var express = __webpack_require__(1);
	// we'll use this to render our app to an html string

	var serverRoutes = express.Router();

	serverRoutes.get('*', function (req, res) {
		// router在浏览器端和服务端实现共享, 浏览器端实现自己的逻辑,
		// 服务端则同样可以享用react的路由, 来同步req.url和react的props进行数据处理
		(0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
			var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
			console.log(req.url);
			res.send(renderPage(appHtml));
		});
	});

	function renderPage(appHtml) {
		return '\n\t\t<!doctype html>\n\t\t<html lang="en">\n\t\t<head>\n\t\t\t<meta charset="UTF-8">\n\t\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=0 max-scale=1.0">\n\t\t\t<title>Hello React</title>\n\t\t\t<style type="text/css">\n\t\t\t\t.color-box {\n\t\t\t\t\twidth: 80px;\n\t\t\t\t\theight: 80px;\n\t\t\t\t}\n\t\t\t</style>\n\t\t</head>\n\t\t<body>\n\t\t\t<div id="app">' + appHtml + '</div>\n\t\t\t<script type="text/javascript" src="/vendor.min.js"></script>\n\t\t\t<script type="text/javascript" src="/index.bundle.js"></script>\n\t\t</body>\n\t\t</html>\n\t';
	}

	module.exports = serverRoutes;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(7);

	var _router = __webpack_require__(9);

	var _router2 = _interopRequireDefault(_router);

	var _main = __webpack_require__(12);

	var _main2 = _interopRequireDefault(_main);

	var _detail = __webpack_require__(15);

	var _detail2 = _interopRequireDefault(_detail);

	var _detail3 = __webpack_require__(14);

	var _detail4 = _interopRequireDefault(_detail3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Home = function Home() {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				_detail4.default,
				null,
				'首页之详情'
			),
			_react2.default.createElement(
				'h3',
				null,
				'Home Index'
			)
		);
	};

	// jsx写法
	// const routes = (
	// 	<Route path="/" component={App}>
	// 		<IndexRoute component={Home} />
	// 		<Route path="/:path" component={Main}>
	// 			<Route path="/:path/:detail" component={Detail} />
	// 		</Route>
	// 	</Route>
	// )

	// obj写法, 使用obj的写法，可以方便地挂载router hook, 还可以有效地控制路由组件的按需加载

	var routes = {
		path: '/',
		component: _router2.default,
		indexRoute: { component: Home },
		childRoutes: [{
			path: '/:path',
			component: _main2.default,
			childRoutes: [{
				path: '/:path/:detail',
				component: _detail2.default,
				// hook
				onEnter: function onEnter(router, replace) {
					console.log(router.params);
					console.log(router);
					// console.log(replace); // 这是一个替换路由的函数
				},
				onLeave: function onLeave(_ref) {
					var params = _ref.params;

					console.log(params);
				}
			}]
		}]
	};

	exports.default = routes;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _NavBar = __webpack_require__(10);

	var _NavBar2 = _interopRequireDefault(_NavBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// 可以将所有页面公用的某个组件一直放在路由中, 然后利用{props.children}来实现嵌套路由视图切换
	var App = function (_React$Component) {
		_inherits(App, _React$Component);

		function App() {
			_classCallCheck(this, App);

			return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
		}

		_createClass(App, [{
			key: 'componentDidMount',

			/*
	  	如果不同的路由对应了同一个组件, 那么在路由切换的时候
	  	这个组件并不会被销毁
	  	但是会走到生命周期的props modify中来
	  */
			value: function componentDidMount() {
				// console.log(this.props.location.query); // ?后面的参数
				// console.log(this.props.params) // 包括了路由path的参数
				// console.log(this.props.routeParams)
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				// console.log(nextProps.location.query); // ?后面的参数
				// console.log(nextProps.params) // 包括了路由path的参数
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_NavBar2.default, null),
					this.props.children
				);
			}
		}, {
			key: 'componentWillUnMount',
			value: function componentWillUnMount() {
				console.log('unmount');
			}
		}]);

		return App;
	}(_react2.default.Component);

	exports.default = App;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(7);

	var _nodeUuid = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import style from './style.css'
	// 导航组件
	var NavBar = function NavBar(_ref) {
		var links = _ref.links;
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				_reactRouter.IndexLink,
				{ to: '', activeStyle: {
						'textDecoration': 'none'
					} },
				'首页'
			),
			links.map(function (link) {
				return _react2.default.createElement(
					_reactRouter.Link,
					{ key: (0, _nodeUuid.v1)(), to: link.url, activeStyle: {
							'textDecoration': 'none'
						} },
					link.nm
				);
			})
		);
	};
	// 要想使activeClassName和activeStyle生效, 则必须配置有正确匹配的route

	// react-router
	NavBar.defaultProps = {
		links: [{ url: '/blog', nm: '博客' }, { url: '/about', nm: '关于我们' }, { url: '/login', nm: '登录' }]
	};

	exports.default = NavBar;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("node-uuid");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _nodeUuid = __webpack_require__(11);

	var _reactRouter = __webpack_require__(7);

	var _lodash = __webpack_require__(13);

	var _ = _interopRequireWildcard(_lodash);

	var _NavBar = __webpack_require__(10);

	var _NavBar2 = _interopRequireDefault(_NavBar);

	var _detail = __webpack_require__(14);

	var _detail2 = _interopRequireDefault(_detail);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
		react-router对于路由的path有严格的分析, 如果在Link的to中添加了?query=123之类的参数
		即使路由可以正确地跳转, 但是link的active可能不会正确地响应
	*/
	// 主体部分
	var Main = function Main(props) {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				_detail2.default,
				props,
				'进一步详情'
			),
			_react2.default.createElement(
				'p',
				null,
				'当前路由:',
				props.params.path
			),
			_react2.default.createElement(
				'p',
				null,
				'携带参数: ',
				_.map(props.location.query, function (v, k) {
					return _react2.default.createElement(
						'span',
						{ key: (0, _nodeUuid.v1)() },
						k,
						' : ',
						v
					);
				})
			),
			props.children
		);
	};

	exports.default = Main;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import style from './style.css'

	var DetailLink = function DetailLink(_ref) {
		var params = _ref.params;
		var children = _ref.children;
		return _react2.default.createElement(
			_reactRouter.Link,
			{ to: '/' + params.path + '/detail', activeStyle: {
					'textDecoration': 'none'
				} },
			children
		);
	};

	DetailLink.defaultProps = {
		params: {
			path: 'index'
		}
	};

	exports.default = DetailLink;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _NavBar = __webpack_require__(10);

	var _NavBar2 = _interopRequireDefault(_NavBar);

	var _LoginForm = __webpack_require__(16);

	var _LoginForm2 = _interopRequireDefault(_LoginForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Detail = function Detail(props) {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'p',
				null,
				'detail: ',
				props.params.path,
				'-',
				props.params.detail
			),
			function () {
				if (props.params.path === 'login') {
					// 登录
					return _react2.default.createElement(_LoginForm2.default, null);
				}
			}()
		);
	};

	exports.default = Detail;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginForm = function (_React$Component) {
		_inherits(LoginForm, _React$Component);

		function LoginForm(props) {
			_classCallCheck(this, LoginForm);

			return _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));
		}

		_createClass(LoginForm, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				console.log('loginForm');
				this.refs.ipt.focus();
			}
		}, {
			key: 'loginSubmit',
			value: function loginSubmit(e) {
				e.preventDefault();
				console.log(this.refs.ipt.value);
				// 通过browserHistory的push方法进行url跳转
				// browserHistory.push('/blog/detail');
				// 通过设置router context上下文进行跳转
				// this.context.router.push('/blog/detail');
				this.context.router.push({
					'pathname': '/blog/detail',
					'query': {
						username: this.refs.ipt.value
					}
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				return _react2.default.createElement(
					'form',
					{ action: '#', onSubmit: function onSubmit(e) {
							return _this2.loginSubmit(e);
						} },
					_react2.default.createElement('input', { type: 'text', ref: 'ipt', placeholder: 'username' }),
					_react2.default.createElement(
						'button',
						null,
						'login'
					)
				);
			}
		}]);

		return LoginForm;
	}(_react2.default.Component);
	// 这个属性只能设置为static静态属性


	LoginForm.contextTypes = {
		router: _react.PropTypes.object
	};

	exports.default = LoginForm;

/***/ }
/******/ ]);