/*
	react mixins
	可以对不同组件的相同部分进行统一配置
*/
import React from 'react'

// React.Component必须有render方法, 而这种写法可以把render的具体组件给抽象出来, 然后交给外部的mixin自己去实现
let Mixin = (InnerComponent) => class extends React.Component {

	constructor() {
		super()
		this.state = {
			"val": 0
		}
		this.update = this.update.bind(this)
	}

	componentWillMount() {
		console.log('will mount')
	}
	componentDidMount() {
		console.log('mounted')
	}

	update() {
		this.setState({
			"val": this.state.val + 1
		})
	}

	render() {
		return (
			<InnerComponent
			update={this.update}
			{...this.state}
			{...this.props}
			/>)
	}

}

export default Mixin