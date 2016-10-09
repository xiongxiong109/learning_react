// 对输入组件进行测试
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../examples/searchApp/reducers'
// import SearchIptContainer from '../../examples/searchApp/containers/search.input'
import { expect } from 'chai'
describe('test for searchIpt component', () => {

	let store;
	before(() => {
		store = createStore(reducers);
	})

	it('should be empty string value when nothing', () => {
		let { searchValue } = store.getState()
		expect(searchValue).to.be.empty
	})

});