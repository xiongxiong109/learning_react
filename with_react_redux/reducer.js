
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
// const Visiblity = (state = 'ALL', action) => {
// 	if (action.type === 'SET_VISIBILITY') {
// 		return action.filter
// 	}
// 	return state
// }
const reducers = combineReducers({
	Items
	// Visiblity // 使用react-router之后, 就可以通过url来控制视图的筛选变换了，所以就不需要Visibility reducer了
})

// es6中对export的写法很灵活, 在通过export default 暴露出默认值的同时, 还可以通过export others来暴露其他的值

export default reducers

/*
	对todo list 按筛选条件进行筛选缓存, 分离的目的是为了进一步地细分层次
	所以会尽可能地让reducer中的程序只处理某一个属性值
*/

export const getVisibleLists = (Items, filter) => {

	switch (filter) {
		case 'all':
			return Items;
			break;
		case 'active':
			return Items.filter( item => !item.isCompleted )
			break;
		case 'completed':
			return Items.filter( item => item.isCompleted )
			break;
		default:
			return Items;
	}

}