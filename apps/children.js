// React 通过{this.props.children}获取子组件
/*
类似于angular指令中的transclude，可以将组件标签中获取到的内容嵌入到另一个组件(一般是父级组件)中
*/
import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

	constructor() {
		super()
		this.btnClick = this.btnClick.bind(this)
	}
	btnClick(e) {
		// console.log(e.currentTarget)
		console.log(this.refs.btn.refs)
	}
	render() {
		return (
			<AppBtn ref="btn" btnClick={this.btnClick}>
				<Heart />
				<span>button name</span>
			</AppBtn>
		)
	}
}

class AppBtn extends React.Component {
	render() {
		console.log(this.props.children) // AppBtn中包裹的元素会根据标签和文本进行分割, 然后形成一个children数组
		return (
			<div>
				<p ref="btnTxt">hello{this.props.children[0]}</p>
				<button ref="btnBox" onClick={this.props.btnClick}>{this.props.children[1]}</button>
			</div>
		)
	}
}

const Heart = () => (
	<i>heart</i>
)

export default App