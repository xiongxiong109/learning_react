// store
import { createStore , applyMiddleware, compose } from 'redux'
import { persistState } from 'redux-devtools'
import Monitor from '../../../dev_tools/chart.monitor'
import { fetchLocalState, configKeys } from '../../../service/localStorage'
import reducers from '../reducers'

// 为redux dev tools 创建 enhancer
const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(),
  // Required! Enable Redux DevTools with the monitors you chose
  Monitor.instrument(),
  // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
  persistState(getDebugSessionKey())
);

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}


const { saveKey } = configKeys; // 本地存储的key
// 拉取本地存储的搜索记录
let initialSearchStore = fetchLocalState(saveKey)

const store = createStore(reducers, initialSearchStore, enhancer)
store.subscribe(() => {
	console.log(store.getState())
})

export default store