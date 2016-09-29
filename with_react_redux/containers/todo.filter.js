// todo filter
// import { connect } from 'react-redux'
// import { setFilter } from '../action'
// import { TodoFilter } from '../components'

// const mapFilterDispatchToProps = (dispatch) => {
// 	return {
// 		setVisibility(filter) {
// 			dispatch(setFilter(filter))
// 		}
// 	}
// }

// const FilterContainer = connect(
// 	mapFilterStateToProps,
// 	mapFilterDispatchToProps
// )(TodoFilter)

// 使用react-router来完成路由切换
import React from 'react'
import { Link } from 'react-router'

const FilterLink = ({ filter, children }) => (
	<Link to={filter === 'all' ? '' : filter } activeClassName='active'>{children}</Link>
)

const FilterContainer = () => (
	<div className="todo-link">
		<FilterLink filter="all">全部</FilterLink>
		<FilterLink filter="active">未完成</FilterLink>
		<FilterLink filter="completed">已完成</FilterLink>
	</div>
)

export default FilterContainer