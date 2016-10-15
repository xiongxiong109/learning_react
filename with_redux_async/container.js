import React from 'react'
import { connect } from 'react-redux'
import { Button, Items } from './component'
import { fetchPost } from './action.creator'

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
			dispatch(fetchPost('http://localhost:3000/apis/orderDetail'))
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