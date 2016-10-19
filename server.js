// 通过webpack对server.js进行打包, 使得服务端也可以使用es6的各种强大语法

// import some new stuff
var express = require('express');
var path = require('path');
var compression = require('compression');
var serverRoutes = require('./serverRoutes');
var app = express();

// gzip 压缩
app.use(compression());
// 指定静态文件目录
app.use(express.static(path.join(__dirname, 'build')));

app.use('/', serverRoutes);

var PORT = process.env.PORT || 8088;

// 监听端口
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
});