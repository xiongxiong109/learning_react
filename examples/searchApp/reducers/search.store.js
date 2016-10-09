// 搜索记录列表
const searchStore = (state = [], action) => {
	switch(action.type) {
		case 'UPDATE_SEARCH_STORE':
			return [action.str, ...state]
			break;
		default:
			return state;
	}
}

export default searchStore