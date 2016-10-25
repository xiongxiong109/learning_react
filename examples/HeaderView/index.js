import React from 'react'
import HeaderView from './HeaderView'

class App extends React.Component {
	constructor(props) {
		super(props)
		// 将状态写入App中, 带入到HeaderView里面去, 取得对HeaderView的props的控制权
		this.state = {
			title: 'Hello App',
			left: [],
			right: []
		}
	}
	render() {
		return (
			<div>
				<HeaderView {...this.state} />
				<button onClick={() => 
					this.setState({
						title: {
							main: '主标题',
							subTitle: '副标题'
						}
					})
				}>添加多个标题</button>
				<button onClick={() => {
					this.setState({
						title: 'Hello App'
					})
				}}>还原默认标题</button>
				<button onClick={() => {
					this.setState({
						left: [{txt: '<'}]
					})
				}}>添加左边菜单</button>
				<button onClick={() => {
					this.setState({
						right: [{txt:'客服'}]
					});
				}}>添加右边菜单</button>
			</div>
		)
	}
}

export default App