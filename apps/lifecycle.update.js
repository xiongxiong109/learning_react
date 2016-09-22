/*
	组件生命周期的update: 
	componentWillReceiveProps: 组件即将接收新的属性的时候
	shouldComponentUpdate: 判断组件的下一个状态是否应该被更新
	componentWillUpdate: 组件即将更新的时候
	componentDidUpdate: 组件状态更新完毕
	其实react-router的原理就是利用了react组件的生命周期,来管理组件的各种堆栈状态
*/
import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

	constructor() {
		super()
		this.state = {
			"canIncrease": false,
			"val": 0
		}
		this.update = this.update.bind(this)
	}
	update() {
		let val = this.state.val;
		this.setState({
			"val": val + 1
		})
		// console.log(this.state.val)
	}
 	render() {
		return (
			<Button val={this.state.val} onClick={this.update}>{this.state.val}</Button>
		)
	}
}

class Button extends React.Component {
	/*
		一个组件的props属性一般由它的父组件通过标签传入
		在子组件里就可以通过props update 来管理组件的props状态
	*/
	componentWillReceiveProps(nextProps) {
		console.log('will receive')
		console.log(nextProps)
	}
	/*shouldComponentUpdate是一个pure function, 它必须有一个boolean类型的返回值, 根据这个返回值来判断是否需要改变状态*/
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.val % 5 === 0
	}
	componentWillUpdate(nextProps, nextState) {
		console.log('will update')
		console.log(nextProps)
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('updated')
		console.log(prevProps)
	}

	render() {
		return (
			<button onClick={this.props.onClick}>{this.props.children}</button>
		)
	}

}

export default App