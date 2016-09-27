
import { combineReducers } from 'redux'

const Items = (state = [], action) => {
	switch (action.type) {
		case 'ADD':
			return [
				{
					id: action.id,
					txt: action.txt,
					isCompleted: false
				},
				...state
			]
		break;
		case 'TOGGLE_ITEM':
			return state.map(item => {
				if (item.id === action.id) {
					return Object.assign({}, item, {
						isCompleted: !item.isCompleted
					})
				}
					return item
			})
			break;
		// case 'FETCH':
			// return [{id: 12, txt: 123456, isCompleted: false}]
			// 这里异步了
			// fetch('http://localhost:3000/lists', {
			// 	method: 'post'
			// })
			// .then(data => data.json())
			// .then(json => {
			// 	return [...json, ...state]
			// })
			// .catch(e => {
			// 	return state;
			// })
		default:
			return state;
	}
}
const Visiblity = (state = 'ALL', action) => {
	if (action.type === 'SET_VISIBILITY') {
		return action.filter
	}
	return state
}
const reducers = combineReducers({
	Items,
	Visiblity
})

export default reducers