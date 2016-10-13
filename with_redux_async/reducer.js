import { combineReducers } from 'redux'

const fetchState = (state = false, action) => {
	switch (action.type) {
		case 'FETCH_LOADING':
			return true;
			break;
		case 'FETCH_FAILED':
		case 'FETCH_SUCCESS':
			return false;
			break;
		default:
			return false;
	}
	return state
}

const fetchDataArr = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_SUCCESS':
			return action.data.opers;
			break;
		default:
			return state
	} 
	return state
}

export const reducers = combineReducers({fetchState, fetchDataArr});