// 搜索结果
import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { v4 } from 'node-uuid'

// 使用dangerouslySetInnerHTML来对html文本进行转义, 这个方法名很长, 意味着react本身并不推荐这样的使用方式 
const RstItem = ({item, saveClick}) => (
	<li onClick={(e) => saveClick(item.str)}>
		<Link to={`/search/${decodeURI(item.str)}`} dangerouslySetInnerHTML={{__html: item.html}}></Link>
	</li>
)

const RstList = ({resultArr, saveClick}) => (
	<ul className="search-list">
		{resultArr.map(item => <RstItem item={item} key={v4()} saveClick={saveClick}/>)}
	</ul>
)

RstItem.propTypes = {
	item: PropTypes.object,
	saveClick: PropTypes.func.isRequired
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