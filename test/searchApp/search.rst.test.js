// 测试搜索结果列表组件
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../examples/searchApp/reducers'
// import SearchRstContainer from '../../examples/searchApp/containers/search.input'
import { expect } from 'chai'

describe('test for searchRst component', () => {

	let store;
	before(() => {
		store = createStore(reducers);
	})

	it('should be empty array when nothing', () => {
		let { searchRst } = store.getState()
		expect(searchRst).to.be.empty
	})

	it('should has another array when UPDATE_SEARCH_RST', () => {

		let { searchRst } = store.getState();
		let arr = [1, 2, 3];
		store.dispatch({type: 'UPDATE_SEARCH_RST', arr });
		searchRst = store.getState().searchRst;
		expect(searchRst).to.have.lengthOf(3); // has value
		expect(searchRst).to.not.equal(arr); // pure function

	})

});