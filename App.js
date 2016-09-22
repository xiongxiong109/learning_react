import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Mixin from './mixins/com'
/*// 也可以使用React.createClass的写法
// class 写法的组件可以配置更多的state等属性
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
}*/

// 组件之间的关系 (父子组件), refs (react中连接虚拟dom与真实dom的方法)
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			r: 128,
			g: 128,
			b: 128
		}
		this.update = this.update.bind(this) // 如果不通过元编程来改变虚拟dom上的this的指向,它会指向window等全局对象
	}

	update(e) {
		// refs可以根据组件一层一层往下找
		this.setState({
			r: ReactDOM.findDOMNode(this.refs.r.refs.ipt).value,
			g: ReactDOM.findDOMNode(this.refs.g.refs.ipt).value,
			b: ReactDOM.findDOMNode(this.refs.b.refs.ipt).value
		})
	}

	render() {
		return (
			<div>
				<span>R: {this.state.r}, G: {this.state.g}, B: {this.state.b}</span>
				<hr />
				<RangeIpt ref="r" update={this.update} type="number" step={5} va={this.state.r}/>
				<RangeIpt ref="g" update={this.update} va={this.state.g}/>
				<RangeIpt ref="b" update={this.update} step={0.01} min={100} va={this.state.b}/>
				<ColorBox {...this.state}></ColorBox>
			</div>
		)
	}
}

// 这种组件属于stateless function, 这种组件不能给refs属性赋值
// const Slider = (props) => (
// 		<input type="range"
// 			onChange={props.update} />
// )

class RangeIpt extends React.Component {
	render() {
		return (
			<div>
				<input
					type={this.props.type}
					min={this.props.min}
					max={this.props.max}
					step={this.props.step}
					ref="ipt"
					value={this.props.va}
					onChange={this.props.update}
				/>
			</div>
		)
	}
}
// 通过设置props可以让组件更具有复用性和可定制性
RangeIpt.propTypes = {
	type: PropTypes.oneOf(['number', 'range']),
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	va: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	update: PropTypes.func.isRequired
}

RangeIpt.defaultProps = {
	type: 'range',
	va: 102,
	step: 1,
	min: 0,
	max: 255
}

const ColorBox = (props) => (
	<div className="color-box" style={
		{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}
	}></div>
)

// React 通过{this.props.children}获取子组件
/*
类似于angular指令中的transclude，可以将组件标签中获取到的内容嵌入到另一个组件(一般是父级组件)中
*/

// class App extends React.Component {

// 	constructor() {
// 		super()
// 		this.btnClick = this.btnClick.bind(this)
// 	}
// 	btnClick(e) {
// 		// console.log(e.currentTarget)
// 		console.log(this.refs.btn.refs)
// 	}
// 	render() {
// 		return (
// 			<AppBtn ref="btn" btnClick={this.btnClick}>
// 				<Heart />
// 				<span>button name</span>
// 			</AppBtn>
// 		)
// 	}
// }

// class AppBtn extends React.Component {
// 	render() {
// 		console.log(this.props.children) // AppBtn中包裹的元素会根据标签和文本进行分割, 然后形成一个children数组
// 		return (
// 			<div>
// 				<p ref="btnTxt">hello{this.props.children[0]}</p>
// 				<button ref="btnBox" onClick={this.props.btnClick}>{this.props.children[1]}</button>
// 			</div>
// 		)
// 	}
// }

// const Heart = () => (
// 	<i>heart</i>
// )

// react组件的生命周期
/*
 组件的生命周期的mount：
 componentWillMount(即将加载)
 componentDidMount(加载完毕)
 componentWillUnmount(即将卸载)
 再加上render(组件渲染)
*/

// class App extends React.Component {
// 	render() {
// 		return (
// 			<div>{this.props.children}</div>
// 		)
// 	}
// }

// class Wrapper extends React.Component {

// 	constructor() {
// 		super()
// 		this.state = {
// 			isLoading: true
// 		}
// 	}

// 	componentWillMount() {
// 		console.log('loading...')
// 	}
// 	render() {
// 		console.log('render wrapper') // 神奇的事情发生了, addBtn在render的时候, 并不会调用wrapper的render方法 
// 		return (
// 			<App>
// 				<Loading isShow={this.state.isLoading}></Loading>
// 				<AddBtn />
// 				<AddBtn />
// 			</App>
// 		)
// 	}
// 	componentDidMount() {
// 		let _W = this;
// 		console.log('mounted')
// 		setTimeout(() => {
// 			_W.setState({'isLoading': false})
// 			// 也可以通过底层方法卸载组件
// 			// ReactDOM.unmountComponentAtNode(document.querySelector('#app'));
// 		}, 500);
// 	}
// 	componentWillUnmount() { // 组件被卸载
// 		console.log('hide')
// 	}
// }

// class AddBtn extends React.Component {

// 	constructor() {
// 		super()
// 		this.state = {
// 			val: 0
// 		}
// 		this.addValue = this.addValue.bind(this)
// 	}
// 	addValue() {
// 		let v = this.state.val + 1
// 		this.setState({val: v})
// 	}
// 	render() {
// 		console.log('render addBtn')
// 		return (
// 			<div className="add-btn">
// 				<span>{this.state.val}</span>
// 				<button onClick={this.addValue}>add</button>
// 			</div>
// 		)
// 	}
// }

// const Loading = (props) => (
// 	<i style={ { display: props.isShow ? 'block' : 'none'} }>loading...</i>
// )

/*
	组件生命周期的update: 
	componentWillReceiveProps: 组件即将接收新的属性的时候
	shouldComponentUpdate: 判断组件的下一个状态是否应该被更新
	componentWillUpdate: 组件即将更新的时候
	componentDidUpdate: 组件状态更新完毕
	其实react-router的原理就是利用了react组件的生命周期,来管理组件的各种堆栈状态
*/

// class App extends React.Component {

// 	constructor() {
// 		super()
// 		this.state = {
// 			"canIncrease": false,
// 			"val": 0
// 		}
// 		this.update = this.update.bind(this)
// 	}
// 	update() {
// 		let val = this.state.val;
// 		this.setState({
// 			"val": val + 1
// 		})
// 		// console.log(this.state.val)
// 	}
//  	render() {
// 		return (
// 			<Button val={this.state.val} onClick={this.update}>{this.state.val}</Button>
// 		)
// 	}
// }

// class Button extends React.Component {
// 	/*
// 		一个组件的props属性一般由它的父组件通过标签传入
// 		在子组件里就可以通过props update 来管理组件的props状态
// 	*/
// 	componentWillReceiveProps(nextProps) {
// 		console.log('will receive')
// 		console.log(nextProps)
// 	}
// 	/*shouldComponentUpdate是一个pure function, 它必须有一个boolean类型的返回值, 根据这个返回值来判断是否需要改变状态*/
// 	shouldComponentUpdate(nextProps, nextState) {
// 		return nextProps.val % 5 === 0
// 	}
// 	componentWillUpdate(nextProps, nextState) {
// 		console.log('will update')
// 		console.log(nextProps)
// 	}
// 	componentDidUpdate(prevProps, prevState) {
// 		console.log('updated')
// 		console.log(prevProps)
// 	}

// 	render() {
// 		return (
// 			<button onClick={this.props.onClick}>{this.props.children}</button>
// 		)
// 	}

// }

// const Button = (props) => <button onClick={props.update}>{props.txt}{props.val}</button>
// const Label = (props) => <label onMouseMove={props.update}>{props.txt}{props.val}</label>
// let ButtonMixined = Mixin(Button)
// let LabelMixined = Mixin(Label)

// class App extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<ButtonMixined txt="button" />
// 				<LabelMixined txt="label"/>
// 			</div>
// 		)
// 	}
// }

export default App