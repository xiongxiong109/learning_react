import { combineReducers } from 'redux'

const dateInfo = (state = {from: '', to: ''}, action) => {
	switch (action.type) {
		case 'UPDATE_TIME': {
			return Object.assign({}, state, {
				from: action.dateType === 'from' ? action.date : state.from,
				to: action.dateType === 'to' ? action.date : state.to
			});
			break;
		}
		default:
			return state
	}
}

const reducers = combineReducers({dateInfo});

export default reducers