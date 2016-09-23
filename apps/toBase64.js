// base64文件转码工具

import React from 'react'
import {render} from 'react-dom'

require('../styles/toBase64.css')

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			base64: '',
			progress: 0,
			isLoading: false
		}
		this.toBase64 = this.toBase64.bind(this)
		this.updateProgress = this.updateProgress.bind(this)
		this.resetData = this.resetData.bind(this)
	}
	updateProgress(v) {
		this.setState({progress: v})
	}
	toBase64(e) {
		let file = e.currentTarget.files[0]
		if (file) {
			this.fileReader.readAsDataURL(file)
		}
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
			var totalMB = e.total / 1024;
			if (totalMB >= 200) { // 大于200K不进行转码
				alert('文件过大')
			} else {
				let _this = this
				this.setState({isLoading: true})
				setTimeout(() => {
					_this.setState({base64: e.target.result})
				}, 300)
			}
		}

	}

	resetData() {
		let _this = this
		this.setState({isLoading: false})
		setTimeout(() => {
			_this.setState({progress: 0})
		}, 300)
	}
	componentDidMount() {
		this.refs.pro.refs.inner.addEventListener('webkitTransitionEnd', this.resetData, false)
		this.refs.pro.refs.inner.addEventListener('transitionEnd', this.resetData, false)
	}

	render() {
		return (
			<div className="file-wrap">
				<FileBtn toBase64={this.toBase64} isLoading={this.state.isLoading}>
					{
						(() => {
							if (this.state.isLoading) {
								return <div className="loading-wrap"><i className="loading-span"></i>uploading...</div>
							} else {
								return 'to Base64'
							}
						})()						
					}
				</FileBtn>
				<FileProgress ref="pro" progress={this.state.progress} isLoading={this.state.isLoading}></FileProgress>
				<FileRst base64={this.state.base64} />
			</div>
		)
	}
	// 销毁file reader对象
	componentWillUnmount() {
		this.refs.pro.refs.inner.removeEventListener('webkitTransitionEnd')
		this.refs.pro.refs.inner.removeEventListener('transitionEnd')
		this.fileReader.onprogress = null
		this.fileReader.onloadend = null
	}
}

const FileBtn = (props) => (
	<div className="file-input">
		<span>{props.children}</span>
		<input type="file" onChange={props.toBase64}/>
	</div>
)

class FileProgress extends React.Component {
	render() {
		return (
			<div className="file-progress">
				<div className="pro-inner" ref="inner" style={ {
					width: this.props.progress + '%',
					opacity: this.props.isLoading ? '1' : '0'
				} }></div>
			</div>
		)
	}
}

const FileRst = (props) => (
	<textarea className="file-rst" value={props.base64} readOnly="readonly"></textarea>
)

export default App