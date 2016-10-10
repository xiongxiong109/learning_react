// 对输入组件进行测试, 使用enzyme框架对react的虚拟dom进行测试

import React from 'react'
// import { createStore } from 'redux'
// import reducers from '../../examples/searchApp/reducers'
import { shallow } from 'enzyme'
import SearchIpt from '../../examples/searchApp/components/search.input'
import { expect } from 'chai'

describe('test for <SearchIpt />', () => {

	// let store;
	// before(() => {
	// 	store = createStore(reducers);
	// })
	
	it('renders an input tag with the type "text"', () => {

		const wrapper = shallow( <SearchIpt /> );
		expect(wrapper.find('input').node.props.type).to.equal('text')

	})

});