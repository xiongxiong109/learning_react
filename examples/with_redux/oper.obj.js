/*
在redux的reducer中操作Object
仍然是保持原有对象不变的原则, 所以对于Object, 一般都采用Object.assign的方法来继承出新的对象
*/
import React, {PropTypes} from 'react'
import {createStore, dispatch} from 'redux'

let unitId = 0;
/*actions*/
// add
const addTodo = (txt) => {
	return {
		type: 'ADD',
		txt,
		id: unitId++
	}
}

// toggle
const toggleItem = (id) => {
	return {
		type: 'TOGGLE',
		id
	}
}

/*reducers*/
const Items = (state = [], action) => {

	switch (action.type) {
		case 'ADD':
			return [
				...state,
				{
					txt: action.txt,
					id: action.id,
					isCompleted: false
				}
			]
		break;
		case 'TOGGLE':
			let id = action.id;
			let newState = state.map(item => {
				if (item.id === id) {
					// 对于对象, 仍然要返回一个新的值
					return Object.assign({}, item, {
						isCompleted: !item.isCompleted
					})
				}
				return item
			})
			return newState;
			break;
		default:
			return state
	}

}

let store = createStore(Items)

class App extends React.Component {

	constructor() {
		super()
		this.state = {
			list: store.getState()
		}
		this.toggleItem = this.toggleItem.bind(this)
		this.unsubscribe = null;
	}

	componentDidMount() {
		this.unsubscribe = store.subscribe( () => {
			this.setState({list: store.getState()})
		} )
	}
	componentWillUnmount() {
		this.unsubscribe && this.unsubscribe()
	}

	addItem(e) {
		e.preventDefault()
		let todoStr = e.target.todo.value;
		if (todoStr !== '') {
			store.dispatch(addTodo(todoStr))
			e.target.todo.value = '';
		}
		// this.setState({list: store.getState()})
	}

	toggleItem (id) {
		store.dispatch(toggleItem(id));
	}

	render() {
		return (
			<div>
				<form onSubmit={(e) => this.addItem(e)}>
					<input name="todo" type="text" placeholder="something todo" />
					<button type="submit">add todo</button>
				</form>
				<ItemList list={this.state.list} toggleItem={this.toggleItem}></ItemList>
			</div>
		)
	}
}

class ItemList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.list.map( item =>
					<li 
						key={item.id}
						onClick={() => this.props.toggleItem(item.id)}
						style= {
							{textDecoration: item.isCompleted ? 'line-through': 'none'}
						}
						>{item.txt}</li> )}
			</ul>
		)
	}
}

ItemList.propTypes ={
	list: PropTypes.array.isRequired
}

ItemList.defaultProps = {
	list: []
}

export default App