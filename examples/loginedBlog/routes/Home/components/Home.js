import React from 'react'
import './home.css' // css文件没有做module处理, 但是使用了postcss中的precss,所以可以使用 precss语法

const Home = () => (
	<div>
		<h1 className={'mt2'}><span>Welcomt Home</span><span>123456</span></h1>
		<p className={'article'}>
			<span>hello world</span>
			<span style={{'float': 'right'}}>gogo</span>
		</p>
	</div>
)

module.exports = Home