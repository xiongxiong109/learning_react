// 搜索结果
import React, { PropTypes } from 'react'
import { v4 } from 'node-uuid'

const RstItem = ({item}) => (
	<li><span>{item}</span></li>
)

const RstList = ({resultArr}) => (
	<ul className="search-list">
		{resultArr.map(item => <RstItem item={item} key={v4()}/>)}
	</ul>
)

RstItem.propTypes = {
	item: PropTypes.string
}
RstItem.defaultProps = {
	item: ''
}

RstList.propTypes = {
	resultArr: PropTypes.array.isRequired
}
RstList.defaultProps = {
	resultArr: []
}

export default RstList