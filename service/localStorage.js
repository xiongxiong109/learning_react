/*
	localStorage本来是只能存储字符串的, 但是在配合html5 的JSON.parse、JSON.stringify方法后
	我们可以把json数据持久化到本地存储中
*/

const STORE_KEY = 'REACT_REDUX'

// 读取本地存储数据
export const fetchLocalState = (storeKey = STORE_KEY) => {
	try {
		const stateJSON = localStorage.getItem(storeKey);
		if (stateJSON === null) {
			return undefined;
		}
		return JSON.parse(stateJSON);
	} catch(e) {
		return undefined
	}

}

// 写入本地存储, 把整个程序的state写入
export const saveLocalState = (state, storeKey = STORE_KEY) => {
	try {
		const stateStr = JSON.stringify(state);
		localStorage.setItem(storeKey, stateStr);
	} catch(e) {
		console.log(e)
	}
}