let unitId = 0

export const addAction = (str) => {
	return {
		type: 'ADD',
		txt: str,
		id: unitId++
	}
}

export const toggleItem = (id) => {
	return {
		type: 'TOGGLE_ITEM',
		id
	}
}

export const setFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY',
		filter
	}
}