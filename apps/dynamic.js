// 动态加载组件内容
import React, {PropTypes} from 'react'
import ReactDOM, {render} from 'react-dom'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			infos: []
		}
	}
	componentWillMount() {
		// 在dom生成之前去请求api接口, 获取动态数据
		fetch('http://10.32.118.16:3000/apis/reactTable', {
			method: 'post'
		})
		.then((data) => {
			return data.json()
		})
		.then(json => {
			if (json.infos) {
				this.setState({
					infos: json.infos
				})
			}
		})
	}
	render() {
		let rows = this.state.infos.map( row => (
			<PeopleRow {...row} key={row.id} />
		))
		return (
			<table style={ {
				textAlign: 'center',
				borderCollapse: 'collapse',
				border: '1px solid #ccc'
			} }>
				<thead>
					<tr>
						<th>name</th>
						<th>age</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		)
	}
}

class PeopleRow extends React.Component {
	render() {
		return (
			<tr>
				<EditableDom val={this.props.name}/>
				<EditableDom val={this.props.age}/>
			</tr>
		)
	}
}

class EditableDom extends React.Component {

	constructor() {
		super()
		this.state = {
			isEditable: false
		}
		this.toggle = this.toggle.bind(this)
		this.update = this.update.bind(this)
	}

	componentDidMount() {
		this.setState({
			val: this.props.val || ''
		})
	}
	toggle() {
		this.setState({
			isEditable: !this.state.isEditable
		})
	}
	update(e) {
		this.setState({
			val: e.currentTarget.value
		})
	}

	render() {
		return (
			<td>
				{
					(() => { // 在jsx语法中, 做条件状语从句得用闭包
						if (this.state.isEditable) {
							return <Ipt toggle={this.toggle} change={this.update} val={this.state.val}/>
						} else {
							return <span onClick={this.toggle}>{this.state.val}</span>
						}
					})()
				}
			</td>
		)
	}
}

class Ipt extends React.Component {

	componentDidMount() {
		this.refs.ipt.focus()
		this.refs.ipt.select()
	}
	componentWillUnmount() {
		console.log('unmounting')
	}
	render() {
		return (
			<input type="text" ref="ipt" defaultValue={this.props.val} onBlur={this.props.toggle} onChange={this.props.change}/>
		)
	}
}

export default App