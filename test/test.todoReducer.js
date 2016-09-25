/*测试 todoReducer */

"use strict"

const expect = require('chai').expect;
const Redux = require('redux');

var id = 0;

var action = {type: 'ADD_TODO', id: 0, text: 'hello redux'}

function todoReducer (state, action) {

	state = state || [];

	switch(action.type) {
		case 'ADD_TODO':
			return state.concat(
					{
						id: action.id,
						text: action.text
					}
				);
		break;
		default:
			return state
	}

}

let store = Redux.createStore(todoReducer);

var stateBefore = [];
var stateAfter = [
	{
		id: 0,
		text: 'hello redux'
	}
]

describe('todo reducer', () => {

	beforeEach(function() {
		store.dispatch(action)
		stateBefore = store.getState()
	})

	it('should have the truly value after dispatching', () => {
		stateAfter.forEach((item, idx) => {
			for (var key in item) {
				expect(item[key]).to.equal(stateBefore[idx][key])
			}
		})
	})

})