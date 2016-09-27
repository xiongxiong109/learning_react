
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