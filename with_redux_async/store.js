import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducers } from './reducer'

const initial_store = {
	fetchState: false
	// fetchDataArr: [{nm: '删除', tips: 'sdf'}]
}

let store = createStore(
	reducers, // reducers
	initial_store, // default state
	applyMiddleware(thunk) // middleware
)

store.subscribe(() => {
	console.log(store.getState())
})


module.exports = {store}