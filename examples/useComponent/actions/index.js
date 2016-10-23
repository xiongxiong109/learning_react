// actions

export const updateDate = (date, dateType) => {

	return {
		type: 'UPDATE_TIME',
		dateType,
		date
	}

}