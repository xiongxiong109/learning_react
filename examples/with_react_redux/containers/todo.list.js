// list container
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { addAction, toggleItem } from '../action'
import { TodoList } from '../components'
import { getVisibleLists } from '../reducer'

/*
	第二个参数可以传入组件自身的属性值，通过获取组件自身的属性值来代替state中的属性
	然后也可以通过es6的写法,来萃取filter属性的值
*/
const mapListStateToProps = (state, {filter}) => {
	return {
		lists: getVisibleLists(state.Items, filter)
	}
}

// const mapListDispatchToProps = (dispatch) => {
// 	return {
// 		toggleState(id) {
// 			dispatch(toggleItem(id))
// 		},
// 		addData(str) {
// 			dispatch(addAction(str))
// 		}
// 	}
// }

const ListContainer = withRouter(connect(
		mapListStateToProps,
		// mapListDispatchToProps
		// 如果mapDispatchToProps里面的各种方法都是一个纯函数, 那么在connect中就可以直接一波带走
		{ toggleState: toggleItem,  addData: addAction}
	)(TodoList), {withRef: true});

export default ListContainer