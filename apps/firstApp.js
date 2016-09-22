// 也可以使用React.createClass的写法
// class 写法的组件可以配置更多的state等属性
import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
class App extends React.Component {

	constructor() {
		super()
		this.state = {
			todoTxt: 'Hello'
		}
	}

	update(e) {
		this.setState({todoTxt: e.target.value})
	}

	render() {
		let txt = this.props.txt // 通过propTypes与defaultProps设定的txt是绑定在组件标签的属性上的值
		// 经典的jsx写法
		// 这里要注意this的绑定
		return (
			<div>
				<input type="text" onChange={e => this.update(e)} value={this.state.todoTxt}/>
				<span>{this.state.todoTxt}</span>
				<p>Hello {txt}</p>
			</div>
		)
		// 也可以用react createElement写法
		// return React.createElement('div', {
		// 	className: 'app-box'
		// }, 'Hello App React')

	}

}

// 简化版的jsx写法, 只能通过调用组件时的标签props来传值，因为这样写没法设置state
// const App = ({txt}) => (
// 	<div className="app-box">hello {txt}</div>
// )

// propTypes是React中对组件中属性值类型的设定, 以确保组件的可控性, 如果添加了isRequired, 则必须给组件的这个属性赋值
App.propTypes = {
	// txt: PropTypes.string
	txt: PropTypes.string.isRequired
}

// 而defaultProps则可以给组件的属性赋默认值
App.defaultProps = {
	txt: 'xiongxiong109'
}

export default App