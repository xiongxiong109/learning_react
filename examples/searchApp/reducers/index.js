// reducers
import { combineReducers } from 'redux'
import searchValue from './search.value'
import searchRst from './search.rst'
import searchStore from './search.store'

const reducers = combineReducers({
	searchValue,
	searchRst,
	searchStore
})

export default reducers