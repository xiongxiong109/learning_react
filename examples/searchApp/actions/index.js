// actions

// 更新搜索值
export const updateSearchValue = (searchValue) => {
	return {
		type: 'UPDATE_SEARCH_VAL',
		val: searchValue
	}
}

// 更新搜索结果
export const updateSearchRst = (searchArray) => {

	return {
		type: 'UPDATE_SEARCH_RST',
		arr: searchArray
	}

}

// 更新搜索存储记录
export const updateSearchStore = (str) => {
	return {
		type: 'UPDATE_SEARCH_STORE',
		str
	}
}

// 清空当前搜索值
export const clearCurrentSearch = () => {
	return {
		type: 'CLEAR_SEARCH'
	}
}