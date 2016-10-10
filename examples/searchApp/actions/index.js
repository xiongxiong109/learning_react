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

// 删除本条搜索记录
export const removeItem = (id) => {
	return {
		type: 'REMOVE_STORE_ITEM',
		id
	}
}

// 清空搜索记录
export const clearStore = () => {
	return {
		type: 'CLEAR_STORE'
	}
}