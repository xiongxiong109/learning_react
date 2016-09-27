// list container
import { connect } from 'react-redux'
import { toggleItem } from '../action'
import { TodoList } from '../components'

// 对todo list 按筛选条件进行筛选缓存

const getVisibleLists = (state) => {

	switch (state.Visiblity) {
		case 'ALL':
			return state.Items;
			break;
		case 'ACTIVE':
			return state.Items.filter( item => !item.isCompleted )
			break;
		case 'COMPLETED':
			return state.Items.filter( item => item.isCompleted )
			break;
		default:
			return state.Items;
	}

}

const mapListStateToProps = (state) => {
	return {
		lists: getVisibleLists(state)
	}
}

const mapListDispatchToProps = (dispatch) => {
	return {
		toggleState(id) {
			dispatch(toggleItem(id))
		}
	}
}

const ListContainer = connect(
	mapListStateToProps,
	mapListDispatchToProps
)(TodoList)

export default ListContainer