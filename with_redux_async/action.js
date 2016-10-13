// 异步操作action
export const fetching = () => {
	return {
		type: 'FETCH_LOADING'
	}
}

export const fatchFailed = (err) => {
	return {
		type: 'FETCH_FAILED',
		err
	}
}

export const fatchSuccess = (data) => {
	return {
		type: 'FETCH_SUCCESS',
		data
	}
}