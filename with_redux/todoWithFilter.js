// 添加筛选功能的todo
import React from 'react'
import {render} from 'react-dom'
import { createStore, dispatch, combineReducers } from 'redux'

let unitId = 0;

// actions
const addTodo = (txt) => {
	return {
		type: 'ADD_TODO',
		txt,
		id: unitId++
	}
}

const toggleTodo = (id) => {
	return {
		type: 'TOGGLE',
		id
	}
}

const setFilter = (filter) => {
	return {
		type: 'SET_FILTER',
		filter
	}
}

// reducers
const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: action.id,
					isCompleted: false,
					txt: action.txt
				}
			]
		break;
		case 'TOGGLE':
			return state.map(item => {
				if (item.id === action.id) {
					return Object.assign({}, item, {
						isCompleted: !item.isCompleted
					})
				}
				return item
			})
		break;
		default:
			return state;
	}
}

const setVisibility = (state = 'ALL', action) => {
	switch (action.type) {
		case 'SET_FILTER':
			return action.filter;
			break;
		default:
			return state;
	}
}

const todoReducers = combineReducers({todos, setVisibility})

// helper
// getVisibleTodos
const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case 'ALL':
			return todos;
			break;
		case 'COMPLETED':
			return todos.filter( item => item.isCompleted );
			break;
		case 'ACTIVE':
			return todos.filter( item => !item.isCompleted );
			break;
		default:
			return todos
	}
}

let store = createStore(todoReducers)

store.subscribe(() => {
	console.log(store.getState())
	render(
		<TodoApp {...store.getState()}></TodoApp>,
		document.querySelector('#app')
	)
})

// components
const FilterLinks = ({ filter, children, currentFilter }) => {
	if (currentFilter === filter) {
		return <span>{children}</span>
	}
	return (
		<a href="javascript:void(0);" onClick={
			e => {
				e.preventDefault()
				store.dispatch(setFilter(filter))
			}
		}>
			{children}
		</a>
	)

}

// 将dom搬离出来, 然后可以把key加在组件上
const TodoItem = ({
	onClick,
	isCompleted,
	txt
}) => (
		<li
			// key=item.id
			onClick={onClick}
			style={
				{
					textDecoration: isCompleted ? 'line-through' : 'none'
				}
			}
	>{txt}</li>
)

/*
	这里的onTodoClick的写法涉及到了js变量的作用域问题
	onTodoClick未指定var、let类型
	那么它会顺着作用域往上找, 那么这里的onTodoClick最终会找到TodoApp中的onTodoClick去
*/
const TodoList = ({todos, onTodoClick}) => (
	<ul>
		{
			todos.map(item =>
				<TodoItem {...item} key={item.id} onClick={() => onTodoClick(item.id)}/>
			)
		}
	</ul>
)

// todoIpt

const TodoIpt = ({onAddClick}) => {
	let input
	return (
		<div className="input-wrap">
			<input type="text" ref={ node => input = node } />
			<button onClick={() => {
				onAddClick(input.value)
				input.value = ''
			}}>add todo</button>
		</div>
	)
}

// todo footer
const TodoFooter = () => (
	<div className="nav">
		<FilterLinks filter={'ALL'} currentFilter={setVisibility}>ALL</FilterLinks>
		{" "}
		<FilterLinks filter={'ACTIVE'} currentFilter={setVisibility}>ACTIVE</FilterLinks>
		{" "}
		<FilterLinks filter={'COMPLETED'} currentFilter={setVisibility}>COMPLETED</FilterLinks>
	</div>
)

class TodoApp extends React.Component {
	render() {
		// 在render的时候, 调用getVisibleTodos
		const {todos, setVisibility} = this.props;
		/*
			这里有一个关键点, 不能每次都直接把todo数组传入下面的filter中进行修改,
			如果这样做了，会导致todo数组中的值被上一次筛选的结果所改变, 就有可能出现:
			先选择:all [3],
			再选择: completed [1],
			最后选择: all or active [0] 返回了0
			因为上一次的completed筛选改变了原数组的值
			为了避免这样的结果, 这里通过getVisibleTodos方法来控制条件筛选的显示隐藏
			而整个todos数组的值依然没有被改变
		*/
		const visibleTodos = getVisibleTodos(
			todos,
			setVisibility
		)
		return (
			<div className="form">
				<TodoIpt onAddClick={ (txt) => {
						store.dispatch(addTodo(txt))
					}
				}/>
				<TodoList todos={visibleTodos} onTodoClick={id => store.dispatch(toggleTodo(id))} />
				<TodoFooter />
			</div>
		)
	}
}

// class App extends React.Component {
// 	render() {
// 		return (
// 			<TodoList visibility={store.getState().setVisibility}></TodoList>
// 		)
// 	}
// }

// export default App

render(
	<TodoApp {...store.getState()}></TodoApp>,
	document.querySelector('#app')
)