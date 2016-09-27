// todo list
import React, { PropTypes } from 'react'

const TodoItem = ({id, txt, toggleState, isCompleted}) => (
	<li onClick={() => toggleState(id)} className={
		isCompleted ? 'completed' : 'active'
	}>{txt}</li>
)

const TodoList = ({lists, toggleState}) => (
	<ul className="todo-list">
		{
			lists.map( item =>
				<TodoItem {...item} key={item.id} toggleState={toggleState}/>
			)
		}
	</ul>
)

TodoList.propTypes = {
	lists: PropTypes.array.isRequired
}

TodoList.defaultProps = {
	lists: []
}

export default TodoList