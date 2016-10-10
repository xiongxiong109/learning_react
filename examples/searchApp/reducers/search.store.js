// 搜索记录列表
const searchStore = (state = [], action) => {
	switch(action.type) {
		case 'UPDATE_SEARCH_STORE':
			// 最多只保留最新的十条记录
			if (state.length >= 10) {
				// 删除最后一条记录
				return [
					action.str,
					...state.slice(0, state.length - 1)
				]
			}
			return [action.str, ...state]
			break;
		case 'REMOVE_STORE_ITEM':
			// 删除一个节点
			return [
				...state.slice(0, action.id),
				...state.slice(action.id + 1)
			]
			// return state;
			break;
		case 'CLEAR_STORE':
			// 清空搜索记录
			return []
		default:
			return state;
	}
}

export default searchStore