// 组件之间的关系 (父子组件), refs (react中连接虚拟dom与真实dom的方法)
import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'

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

export default App