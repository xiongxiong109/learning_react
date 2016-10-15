import React from 'react'
import { connect } from 'react-redux'
import { Button, Items } from './component'
// import { fetching } from './action'
import { createAction } from 'redux-actions'
import { promiseFetchPost } from './action.creator'

/* ButtonContainer */
const mapBtnStateToProps = (state) => {
	return {
		disabled: state.fetchState
	}
}
const mapBtnDispatchToProps = (dispatch) => {
	return {
		onClick(e) {
			// 方法1: 手动创建action creator来做异步操作
			// dispatch(fetchPost()).then(() => {
			// 	console.log(x)
			// })

			let url = 'http://localhost:3000/apis/orderDetail';
			// 发出同步请求
			// dispatch(fetching());
			// 发出异步请求, 使用redux-promise，让createAction的payload返回一个promise对象
			/*
				createAction是一个柯里化函数, 它的第二个参数接收一个函数, 这个函数执行结果返回的值,
				会作为createAction 返回函数的参数进行调用，并返回到payload属性中
				例如:
				let act = createAction('ACTION_TYPE', args => args + 1);
				执行 act(123) --> {type: 'ACTION_TYPE', payload: 124}
			*/
			let act = createAction('FETCH_LOADING', (url) => {
				promiseFetchPost(dispatch, url);
			});
			// console.log(act(url));
			dispatch(act(url));
		}
	}
}

export const ButtonContainer = connect(mapBtnStateToProps, mapBtnDispatchToProps)(Button)
/* ButtonContainer end */

/* ItemsContainer */
const mapItemStateToProps = (state) => {
	return {
		opers: state.fetchDataArr
	}
}

export const ItemsContainer = connect(mapItemStateToProps)(Items);
/* ItemsContainer end */