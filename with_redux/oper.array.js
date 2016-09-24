/*
	使用redux reducer的时候对数组数据的操作
	仍然是pure function的原则, 我们不再希望reducer对数组执行增删改操作的时候, 改变了之前的state,
	所以我们将不再推荐使用数组的push、splice方法(这两个方法都会改变原来的数组)
	推荐使用的是concat、slice、以及es6的...
*/

import React from 'react'
import { combineReducers, createStore, dispatch } from 'redux'

const arrayReducer = (state = [], action) => {
	switch(action.type) {
		case 'PUSH': // 在数组的最后插入一个元素action = {type: 'PUSH', num}
			return [
				...state,
				action.num
			]
		break;
		case 'INSERT': // 在数组的任意位置插入一个元素 action = {type: 'INSERT', num, idx}
			return [
				...state.slice(0, action.idx),
				action.num,
				...state.slice(action.idx)
			]
		break;
		case 'DELETE':
			if (action.idx) { // 优先根据索引删除
				return [
					...state.slice(0, action.idx),
					...state.slice(action.idx + 1)
				]
			} else if (action.num) { // 其次根据数值删除
				return state.filter(n => n !== action.num)
			}
		break;
		default:
			return state;
	}
}

let store = createStore(arrayReducer);
store.subscribe(() => {
	console.log(store.getState())
})
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			rst: []
		}
	}

	componentWillMount() {
		store.dispatch({type: 'PUSH', num: 8}); // [8]
		store.dispatch({type: 'PUSH', num: 12}); // [8, 12]
		store.dispatch({type: 'INSERT', num: 66, idx: 1}); // [8, 66, 12]
		store.dispatch({type: 'INSERT', num: 88, idx: 2}); // [8, 66, 88, 12]
		// store.dispatch({type: 'DELETE', num: 88}); // [8, 66, 12]
		store.dispatch({type: 'DELETE', idx: 1}); // [8, 88, 12]
	}

	componentDidMount() {
		this.setState({
			rst: store.getState()
		})
	}

	render() {
		return (
			<div className="counter-wrap">
				<p>{this.state.rst.join(', ')}</p>
			</div>
		)
	}
}

export default App