// 搜索输入

const searchValue = (state = '', action) => {
	switch(action.type) {
		case 'UPDATE_SEARCH_VAL': // 更新搜索字段
			return action.val
			break;
		case 'CLEAR_SEARCH': // 同一个action可以在不同的reducer中单独处理
			return '';
			break;
		default:
			return state
	}
}

export default searchValue