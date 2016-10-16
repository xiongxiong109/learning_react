var express = require('express');
var path = require('path');
var compression = require('compression');

var app = express();

// gzip 压缩
app.use(compression());
// 指定静态文件目录
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', function (res, req, next) {
	req.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var PORT = process.env.PORT || 8080;

// 监听端口
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})