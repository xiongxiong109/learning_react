// 搜索结果列表

const searchRst = (state = [], action) => {
	switch(action.type) {
		// 更新搜索结果
		case 'UPDATE_SEARCH_RST':
			return [...action.arr] 
			break;
		case 'CLEAR_SEARCH':
			return [];
			break;
		default:
			return state
	}
}

export default searchRst