var express = require('express');
var router = express.Router();

// mongoose 相关
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');
var ItemModel = require('../models/item.model');

// 跨域支持
router.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.all('/lists', function(req, res, next) {

	ItemModel.fetch(function(err, rst) {
		if (err) {
			res.send(err)
		} else {
			res.send(rst)
		}
	})

});

module.exports = router;
