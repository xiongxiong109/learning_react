// list container
import { connect } from 'react-redux'
import { addAction, toggleItem } from '../action'
import { TodoList } from '../components'

// 对todo list 按筛选条件进行筛选缓存

const getVisibleLists = (state, filter) => {

	switch (filter) {
		case 'all':
			return state.Items;
			break;
		case 'active':
			return state.Items.filter( item => !item.isCompleted )
			break;
		case 'completed':
			return state.Items.filter( item => item.isCompleted )
			break;
		default:
			return state.Items;
	}

}

// 第二个参数传入自身的属性，来代替state中的属性
const mapListStateToProps = (state, ownProps) => {
	return {
		lists: getVisibleLists(state, ownProps.filter)
	}
}

const mapListDispatchToProps = (dispatch) => {
	return {
		toggleState(id) {
			dispatch(toggleItem(id))
		},
		addData(str) {
			dispatch(addAction(str))
		}
	}
}

const ListContainer = connect(
	mapListStateToProps,
	mapListDispatchToProps
)(TodoList)

export default ListContainer