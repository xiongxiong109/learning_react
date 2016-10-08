// 搜索输入框组件

import React, { PropTypes } from 'react'

class SearchIpt extends React.Component {

	componentDidMount() {
		this.refs.ipt.focus()
	}

	render() {
		const props = this.props; 
		return (
			<div className="search-ipt-wrap">
				<input type="text" defaultValue={props.searchValue} ref="ipt" onChange={(e) => props.updateSearch(e, this.refs.ipt.value)} />
			</div>
		)
	}
}

SearchIpt.propTypes = {
	searchValue: PropTypes.string.isRequired,
	updateSearch: PropTypes.func
}

SearchIpt.defaultProps = {
	searchValue: ''
}

export default SearchIpt