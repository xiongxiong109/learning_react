// 搜索输入框组件

import React, { PropTypes } from 'react'

class SearchIpt extends React.Component {

	componentDidMount() {
		this.refs.ipt.focus()
	}
	// 当传入的searchValue被置为空的时候, 清空输入框的值
	componentWillReceiveProps(nextProp) {
		this.refs.ipt.value = nextProp.searchValue;
		if (nextProp.searchValue !== '') {
			this.props.updateSearch(null, nextProp.searchValue)
		}
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