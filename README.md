# learning_react
learning with react

### 编写mocha 测试时的注意事项
1. 如果需要在mocha中使用es6语法, 则需要安装 babel-core, 以及相应的babel-presets
比如一般会安装presets-2015, 如果要测试react jsx语法, 则还需要指定presets-react
2. 在项目目录下配置好相应的.babelrc
内容如下:

```json
	{
		"presets": ["es2015", "react"]
	}
```

3. 执行对应的mocha指令

```bash
	cd ./test/ && mocha --compilers js:babel-core/register ./
```

4. 把测试命令写入到`package.json`中的`npm test`去