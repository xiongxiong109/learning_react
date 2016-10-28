/*
使用combineReducers 将多个reducers 组合到一起
一个reducer里面可以嵌套多个其他的reducer
*/
import React from 'react'
import {createStore, combineReducers} from 'redux'

let id = 0;
// actions
const addItem = (txt) => {
	return {
		type: 'ADD_ITEM',
		txt: txt,
		id: id++
	}
}

const filterList = (listType) => {
	return {
		type: 'FILTER',
		listType
	}
}

// reducers
// 这是一个reducer, 其实可以把这个reducer中的每一个case 都提取出来，另做一个reducer
// const todoReducers = (state = [], action) => {

// 	switch(action.type) {
// 		case 'ADD_ITEM':
// 			return [
// 				{
// 					id: action.id,
// 					txt: action.txt,
// 					isCompleted: false
// 				},
// 				...state
// 			]
// 			break;
// 		case 'FILTER':
// 			return state.filter( item => item.isCompleted === action.isCompleted )
// 			break;
// 		default:
// 			return state;
// 	}

// }

const todo = (state = [], action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return [
				...state,
				{
					id: action.id,
					txt: action.txt,
					isCompleted: false
				}
			]
		break;
		case 'FILTER':
			if (action.listType === 'ALL') {
				return [...state]
			} else {
				let isCompleted = action.listType === 'COMPLETED' ? true : false;
				return state.filter( item => item.isCompleted === isCompleted )
			}
		default:
			return state;
	}
}

const visibility = (state = 'ALL', action) => {
	return action.listType || state
}

// 通过对象将上面两个reducer整合到一个reducer里面去
// const todoReducers = (state = {}, action) =>{
// 	console.log(action)
// 	return {
// 		todo: todo(state.list, action),
// 		visibility: visibility(state.filter, action)
// 	}
// }

// 也可以直接通过combineReducers这个方法, 将reducers整合到一起
const todoReducers = combineReducers({todo, visibility});

// store
let store = createStore(todoReducers)
store.subscribe(() => {
	console.log(store.getState())
})

// views

class App extends React.Component {

	constructor() {
		super()
	}

	submit(e) {
		e.preventDefault()
		let str = e.target.todo.value;
		store.dispatch(addItem(str));
	}
	toggle(type) {
		store.dispatch(filterList(type));
	}

	render() {
		return (
			<div className="app-wrap">
				<Ipt submit={(e) => this.submit(e)}/>
				<Nav toggle={(type) => this.toggle(type)}/>
				<List />
			</div>
		)
	}
}

const Nav = (props) => (
	<div className="app-nav">
		<a style={ {margin: '5px'} } onClick={() => props.toggle('ALL')} href="javascript:void(0);">all</a>
		<a style={ {margin: '5px'} } onClick={() => props.toggle('COMPLETED')} href="javascript:void(0);">completed</a>
		<a style={ {margin: '5px'} } onClick={() => props.toggle('UNCOMPLETED')} href="javascript:void(0);">not Completed</a>
	</div>
)

const Ipt = (props) => (
	<form onSubmit={props.submit}>
		<input type="text" name="todo"/>
		<button>submit</button>
	</form>
)

class List extends React.Component {
	render() {
		return (
			<ul>
				<li>123456</li>
			</ul>
		)
	}
}

export default App