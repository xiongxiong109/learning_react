// todo list
import React, { PropTypes } from 'react'

const TodoItem = ({id, txt, toggleState, isCompleted}) => (
	<li onClick={() => toggleState(id)} className={
		isCompleted ? 'completed' : 'active'
	}>{txt}</li>
)

// const TodoList = ({lists, toggleState}) => (
// 	<ul className="todo-list">
// 		{
// 			lists.map( item =>
// 				<TodoItem {...item} key={item.id} toggleState={toggleState}/>
// 			)
// 		}
// 	</ul>
// )
class TodoList extends React.Component {

	constructor() {
		super()
	}

	componentDidMount() {
		const props = this.props;
		// fetch('http://localhost:3000/lists', {
		// 	method: 'post'
		// })
		// .then(data => data.json())
		// .then(jsonArr => {
		// 	jsonArr.map( remoteItem => {
		// 		props.addData(remoteItem.name)
		// 	})
		// })
		// .catch(e => {
		// 	console.log(e)
		// })
	}

	render() {
		const props = this.props;
		return (
			<ul className="todo-list">
				{
					props.lists.map( item =>
						<TodoItem {...item} key={item.id} {...props}/>
					)
				}
			</ul>
		)
	}
}

TodoList.propTypes = {
	lists: PropTypes.array.isRequired
}

TodoList.defaultProps = {
	lists: []
}

export default TodoList