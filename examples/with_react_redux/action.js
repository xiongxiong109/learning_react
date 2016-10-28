import { v4 } from 'node-uuid' // 使用node-uuid的v4方法生成唯一的uid

export const addAction = (str) => {
	return {
		type: 'ADD',
		txt: str,
		id: v4()
	}
}

export const toggleItem = (id) => {
	return {
		type: 'TOGGLE_ITEM',
		id
	}
}

// export const setFilter = (filter) => {
// 	return {
// 		type: 'SET_VISIBILITY',
// 		filter
// 	}
// }