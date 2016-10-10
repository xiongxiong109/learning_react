// store
import { createStore } from 'redux'
import { fetchLocalState, configKeys } from '../../../service/localStorage'
import reducers from '../reducers'

const { saveKey } = configKeys; // 本地存储的key
// 拉取本地存储的搜索记录
let initialSearchStore = fetchLocalState(saveKey)

const store = createStore(reducers, initialSearchStore)
store.subscribe(() => {
	console.log(store.getState())
})

export default store