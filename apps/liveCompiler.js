// jsx 在线编译器
import React from 'react'
import ReactDOM from 'react-dom'

import Styles from '../styles/liveCompiler.css'

class App extends React.Component {

	constructor() {
		super()
		this.state = {
			input: '/* input your jsx code here */',
			output: '',
			isError: false
		}
		this.update = this.update.bind(this)
	}
	update(e) {
		let code = e.currentTarget.value
		// 利用babel browser.js 来在线编译jsx语法
		try {
			let es6 = babel.transform(code, {
				stage: 0, // 这里对应的是ECMAScript-stage
				loose: 'all'
			})

			this.setState({output: es6.code, isError: false})
		} catch(e) {
			this.setState({output: e.message, isError: true})
		}
	}
	componentDidMount() {
		this.refs.ipt.focus()
		this.refs.ipt.select()
		console.log(Styles)
	}
	render() {
		return (
			<div className="live-compiler">
				<h4>Live Compiler for jsx</h4>
				<div className="live">
					<textarea ref="ipt" defaultValue={this.state.input} onChange={this.update}></textarea>
					<div className={ this.state.isError ? 'rst error': 'rst' }>{this.state.output}</div>
				</div>
			</div>
		)
	}
}

export default App