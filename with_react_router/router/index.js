import React from 'react'
import NavBar from '../component/NavBar/'

// 可以将所有页面公用的某个组件一直放在路由中, 然后利用{props.children}来实现嵌套路由视图切换
class App extends React.Component {
	/*
		如果不同的路由对应了同一个组件, 那么在路由切换的时候
		这个组件并不会被销毁
		但是会走到生命周期的props modify中来
	*/
	componentDidMount() {
		// console.log(this.props.location.query); // ?后面的参数
		// console.log(this.props.params) // 包括了路由path的参数
		// console.log(this.props.routeParams)
	}
	componentWillReceiveProps(nextProps) {
		// console.log(nextProps.location.query); // ?后面的参数
		// console.log(nextProps.params) // 包括了路由path的参数
	}
	render() {
		return (
			<div>
				<NavBar />
				{this.props.children}
			</div>
		)
	}
	componentWillUnMount() {
		console.log('unmount')
	}
}
export default App