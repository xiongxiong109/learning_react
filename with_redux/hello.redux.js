// 使用redux来管理应用程序的状态
// action reducer dispatch
/*
redux 管理一个state tree
唯一能够改变state的方法，就是触发action
而描述状态如何改变的函数，就是使用纯函数reducer, 在每次state发生变化的时候, 生成新的函数状态。
*/
/*
pure functions: 纯函数, 这类函数只会对函数的参数进行单纯的运算，并且不会去改变传入参数的初始值
inpure functions: 这类函数与pure function 相反， 它在自己的函数里面有可能会调用别的函数做其他的事情、
也有可能会改变参数的初始状态
正如我们所说, state的值只能通过action触发来改变, 所以在redux中，我们写的函数都是pure function
pure function 增加了程序状态的可预测性和可控性
*/
import React from 'react'
import { dispatch } from 'redux'

// createStore 原理及实现 这是一个经典的pubsub模式的实现
/*forEach filter都是es6中数组的新方法*/
const createStore = (reducer) => {

	let state; // state
	let listeners = []; // sub pub

	// subscribe负责将监听器添加到监听器数组中, 同时官方的subscribe方法还会返回一个取消监听的函数
	const subscribe = (listener) => {
		listeners.push(listener)
		return () => {
			listeners = listeners.filter(l => l !== listener );
		}
	}

	// 分派指令动作的时候, 触发对应的监听函数
	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach( listener => listener() );
	}

	const getState = () => state;

	// 程序初始调用一次
	dispatch({});

	return {dispatch, getState, subscribe}

}

// reducer, 每一个reducer都是一个纯函数, action 也是一个函数
const counter = (state = 0, action) => {

	switch (action.type) {
		case 'ADD':
			return state + 1;
		break;
		case 'DES':
			return state - 1;
		break;
		default:
			return state;
	}

}

let store = createStore(counter);

store.subscribe(() => {
	console.log(store.getState())
});

class App extends React.Component {

	constructor() {
		super()
		this.state = {
			number: store.getState()
		}
	}
	update(type) {
		let action = () => {
			return {type}
		};
		store.dispatch( action(type) );
		this.setState({number: store.getState()})
	}
	render() {
		return (
			<div className="counter-wrap">
				<h4>redux Counter</h4>
				<span>{this.state.number}</span>
				<button onClick={() => this.update('ADD')}>add</button>
				<button onClick={() => this.update('DES')}>des</button>
			</div>
		)
	}
}

export default App