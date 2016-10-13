// 创建异步的action creator函数
import { polyfill } from 'es6-promise'
import 'isomorphic-fetch' // fetch api 做浏览器兼容
import { fetching, fatchFailed, fatchSuccess } from './action'

polyfill() // promise语法polyfill

let url = 'http://localhost:3000/apis/orderDetail'

/*
	这是一个action creator函数
	action creator会事先调用一个dispatch, 然后返回一个发起异步请求的函数
	这样做是可以实现异步变化的, 但是会报错, 因为store.dispatch方法正常情况下，参数只能是对象，不能是函数
	所以要用到react-thunk中间件来改造store.dispatch
*/
export const fetchPost = () => {

	return dispatch => {

		dispatch(fetching());
		return fetch(url, {
			method: 'POST',
			data: {name: '123'}
		})
		.then((response) => response.json())
		.then(json => {
			dispatch(fatchSuccess(json))
		})
		.catch(err => {
			dispatch(fatchFailed(err))
		})

	}

}