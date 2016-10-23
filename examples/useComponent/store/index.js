// store
import { createStore } from 'redux'
import reducers from '../reducers'

let store = createStore(reducers);

store.subscribe(() => {
	console.log(store.getState())
});

export default store