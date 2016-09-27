// todo ipt
import React from 'react'

// 表单输入组件

class TodoIpt extends React.Component {

	constructor() {
		super()
	}

	componentDidMount() {
		this.refs.ipt.focus()
	}

	update(e) {

		let input = this.refs.ipt
		let props = this.props
		e.preventDefault()
		if (input.value) {
			props.addTodoItem(input.value)
			input.value = ''
		}
		
	}

	render() {
		
		let input = this.refs.ipt
		return (
			<form className='form-wrap' action="#" onSubmit={e => this.update(e)}>
				<input type="text" ref='ipt' />
				<button>add Todo</button>
			</form>
		)
	}
}
// const TodoIpt = ({str, addTodoItem}) => {
// 	let input
// 	return (
// 		<form className='form-wrap' action="#" onSubmit={
// 			e => {
// 				e.preventDefault()
// 				if (input.value) {
// 					addTodoItem(input.value)
// 					input.value = ''
// 				}
// 			}
// 		}>
// 			<input type="text" ref={node => input = node}/>
// 			<button>add Todo</button>
// 		</form>
// 	)
// }

export default TodoIpt