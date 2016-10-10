// 搜索记录存储组件
import React from 'react'
import * as _ from 'lodash'
import { v4 } from 'node-uuid'

const SearchStoreItem = ({children, removeStoreItem, idx}) => (
	<li>
		<span>{children}</span>
		<a href="javascript:void(0);" onClick={(e) => removeStoreItem(idx)}>x</a>
	</li>
)

const SearchStore = (props) => (
	<div className="search-store">
		{
			(() => {
				if (!_.isEmpty(props.storeData)) {
					return (
						<div>
							<h3>最近搜索记录<a href="javascript:void(0);" onClick={props.clearSearchStore}>清空</a>(共{props.storeData.length}条)</h3>
							<ul className="search-store">
								{props.storeData.map((item, idx) =>
									<SearchStoreItem {...props} key={v4()} idx={idx}>{item}</SearchStoreItem>
								)}
							</ul>
						</div>
					)
				}
			})()
		}
	</div>
)

export default SearchStore