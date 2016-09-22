import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
/*// Ҳ����ʹ��React.createClass��д��
// class д��������������ø����state������
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
		let txt = this.props.txt // ͨ��propTypes��defaultProps�趨��txt�ǰ��������ǩ�������ϵ�ֵ
		// �����jsxд��
		// ����Ҫע��this�İ�
		return (
			<div>
				<input type="text" onChange={e => this.update(e)} value={this.state.todoTxt}/>
				<span>{this.state.todoTxt}</span>
				<p>Hello {txt}</p>
			</div>
		)
		// Ҳ������react createElementд��
		// return React.createElement('div', {
		// 	className: 'app-box'
		// }, 'Hello App React')

	}

}

// �򻯰��jsxд��, ֻ��ͨ���������ʱ�ı�ǩprops����ֵ����Ϊ����дû������state
// const App = ({txt}) => (
// 	<div className="app-box">hello {txt}</div>
// )

// propTypes��React�ж����������ֵ���͵��趨, ��ȷ������Ŀɿ���, ��������isRequired, �����������������Ը�ֵ
App.propTypes = {
	// txt: PropTypes.string
	txt: PropTypes.string.isRequired
}

// ��defaultProps����Ը���������Ը�Ĭ��ֵ
App.defaultProps = {
	txt: 'xiongxiong109'
}*/

// ���֮��Ĺ�ϵ (�������), refs (react����������dom����ʵdom�ķ���)
// class App extends React.Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			r: 128,
// 			g: 128,
// 			b: 128
// 		}
// 		this.update = this.update.bind(this) // �����ͨ��Ԫ������ı�����dom�ϵ�this��ָ��,����ָ��window��ȫ�ֶ���
// 	}

// 	update(e) {
// 		// refs���Ը������һ��һ��������
// 		this.setState({
// 			r: ReactDOM.findDOMNode(this.refs.r.refs.ipt).value,
// 			g: ReactDOM.findDOMNode(this.refs.g.refs.ipt).value,
// 			b: ReactDOM.findDOMNode(this.refs.b.refs.ipt).value
// 		})
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<span>R: {this.state.r}, G: {this.state.g}, B: {this.state.b}</span>
// 				<hr />
// 				<Slider ref="r" update={this.update} va={this.state.r}/>
// 				<Slider ref="g" update={this.update} va={this.state.g}/>
// 				<Slider ref="b" update={this.update} va={this.state.b}/>
// 				<ColorBox {...this.state}></ColorBox>
// 			</div>
// 		)
// 	}
// }

// �����������stateless function, ����������ܸ�refs���Ը�ֵ
// const Slider = (props) => (
// 		<input type="range"
// 			onChange={props.update} />
// )

// class Slider extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<input
// 					type="range"
// 					min="0"
// 					max="255"
// 					ref="ipt"
// 					value={this.props.va}
// 					onChange={this.props.update}
// 				/>
// 			</div>
// 		)
// 	}
// }

// const ColorBox = (props) => (
// 	<div className="color-box" style={
// 		{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}
// 	}></div>
// )

// React ͨ��{this.props.children}��ȡ�����
/*
������angularָ���е�transclude�����Խ������ǩ�л�ȡ��������Ƕ�뵽��һ�����(һ���Ǹ������)��
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
// 		console.log(this.props.children) // AppBtn�а�����Ԫ�ػ���ݱ�ǩ���ı����зָ�, Ȼ���γ�һ��children����
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

// react�������������
/*
 �������������������״̬��componentWillMount(��������)��componentDidMount(�������)��componentWillUnmount(����ж��)
 �ټ���render(�����Ⱦ)
*/

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
		console.log('render wrapper') // ��������鷢����, addBtn��render��ʱ��, ���������wrapper��render���� 
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
			// Ҳ����ͨ���ײ㷽��ж�����
			// ReactDOM.unmountComponentAtNode(document.querySelector('#app'));
		}, 500);
	}
	componentWillUnmount() { // �����ж��
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

export default Wrapper