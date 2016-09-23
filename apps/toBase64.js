// base64文件转码工具

import React from 'react'
import {render} from 'react-dom'

require('../styles/toBase64.css')

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			base64: '',
			sourceCode: '',
			progress: 0,
			isCompleted: false
		}
		this.toBase64 = this.toBase64.bind(this)
		this.updateProgress = this.updateProgress.bind(this)
	}
	updateProgress(v) {
		this.setState({progress: v})
	}
	toBase64(e) {
		let file = e.currentTarget.files[0]
		this.fileReader.readAsDataURL(file)
	}
	// 挂载reader事件监听
	componentWillMount() {

		this.fileReader = new FileReader()

		this.fileReader.onloadstart = (e) => {
			this.setState({base64: ''});
		}
		this.fileReader.onprogress = (e) => {
			this.updateProgress(e.loaded / e.total * 100)
		}
		this.fileReader.onloadend = (e) => {
			this.setState({isCompleted: true, base64: e.target.result})
		}

	}

	componentDidMount() {
		let _this = this
		this.refs.pro.refs.inner.addEventListener('webkitTransitionEnd', () => {
			this.setState({isCompleted: false})
			setTimeout(() => {
				_this.setState({progress: 0})
			}, 300)
		}, false)
	}

	render() {
		return (
			<div className="file-wrap">
				<FileBtn toBase64={this.toBase64} isCompleted={this.state.isCompleted}>请选择文件</FileBtn>
				<FileProgress ref="pro" progress={this.state.progress} isCompleted={this.state.isCompleted}></FileProgress>
				<FileRst>{this.state.base64}</FileRst>
			</div>
		)
	}
	// 销毁file reader对象
	componentWillUnmount() {
		this.refs.pro.refs.inner.removeEventListener('webkitTransitionEnd')
		this.fileReader.onprogress = null
		this.fileReader.onloadend = null
	}
}

const FileBtn = (props) => (
	<div className="file-input">
		<span>{props.children}</span>
		<input type="file" onChange={props.toBase64} disabled={props.isCompleted}/>
	</div>
)

class FileProgress extends React.Component {
	render() {
		return (
			<div className="file-progress">
				<div className="pro-inner" ref="inner" style={ {
					width: this.props.progress + '%',
					opacity: this.props.isCompleted ? '1' : '0'
				} }></div>
			</div>
		)
	}
}

const FileRst = (props) => (
	<div className="file-rst">{props.children}</div>
)

export default App