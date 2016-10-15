import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk' // 使用redux-thunk + action creator实现
import promiseMiddleware from 'redux-promise' // 使用promise中间件实现
import { reducers } from './reducer'

const initial_store = {
	fetchState: false
	// fetchDataArr: [{nm: '删除', tips: 'sdf'}]
}

let store = createStore(
	reducers, // reducers
	initial_store, // default state
	applyMiddleware(promiseMiddleware) // middleware
)

store.subscribe(() => {
	console.log(store.getState())
})


module.exports = {store}