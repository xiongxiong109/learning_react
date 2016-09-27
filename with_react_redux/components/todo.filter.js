// todo.filter
import React from 'react'

const Link = ({active, filter, setVisibility, children}) => {

	if (active === filter) {
		return <span>{children}</span>
	}
	return (
		<a href="javascript:void(0);" onClick={() => setVisibility(filter)}>{children}</a>
	)

}

// class TodoFilter extends React.Component {
// 	render() {
// 		const props = this.props
// 		return (
// 			<div className="todo-link">
// 				<Link active={this.props.currentFilter} setVisibility={this.props.setVisibility} filter={'ALL'}>全部</Link>
// 				<Link active={this.props.currentFilter} setVisibility={this.props.setVisibility} filter={'ACTIVE'}>未完成</Link>
// 				<Link active={this.props.currentFilter} setVisibility={this.props.setVisibility} filter={'COMPLETED'}>已完成</Link>
// 			</div>
// 		)
// 	}
// }

const TodoFilter = ({currentFilter, setVisibility}) => (
	<div className="todo-link">
		<Link active={currentFilter} setVisibility={setVisibility} filter={'ALL'}>全部</Link>
		<Link active={currentFilter} setVisibility={setVisibility} filter={'ACTIVE'}>未完成</Link>
		<Link active={currentFilter} setVisibility={setVisibility} filter={'COMPLETED'}>已完成</Link>
	</div>
)

export default TodoFilter