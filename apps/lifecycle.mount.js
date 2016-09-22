// react组件的生命周期
/*
 组件的生命周期的mount：
 componentWillMount(即将加载)
 componentDidMount(加载完毕)
 componentWillUnmount(即将卸载)
 再加上render(组件渲染)
*/

import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
	render() {
		return (
			<div>{this.props.children}</div>
		)
	}
}

class Wrapper extends React.Component {

	constructor() {
		super()
		this.state = {
			isLoading: true
		}
	}

	componentWillMount() {
		console.log('loading...')
	}
	render() {
		console.log('render wrapper') // 神奇的事情发生了, addBtn在render的时候, 并不会调用wrapper的render方法 
		return (
			<App>
				<Loading isShow={this.state.isLoading}></Loading>
				<AddBtn />
				<AddBtn />
			</App>
		)
	}
	componentDidMount() {
		let _W = this;
		console.log('mounted')
		setTimeout(() => {
			_W.setState({'isLoading': false})
			// 也可以通过底层方法卸载组件
			// ReactDOM.unmountComponentAtNode(document.querySelector('#app'));
		}, 500);
	}
	componentWillUnmount() { // 组件被卸载
		console.log('hide')
	}
}

class AddBtn extends React.Component {

	constructor() {
		super()
		this.state = {
			val: 0
		}
		this.addValue = this.addValue.bind(this)
	}
	addValue() {
		let v = this.state.val + 1
		this.setState({val: v})
	}
	render() {
		console.log('render addBtn')
		return (
			<div className="add-btn">
				<span>{this.state.val}</span>
				<button onClick={this.addValue}>add</button>
			</div>
		)
	}
}

const Loading = (props) => (
	<i style={ { display: props.isShow ? 'block' : 'none'} }>loading...</i>
)

export default App