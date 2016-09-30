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

// 第二个参数可以传入组件自身的属性值，通过获取组件自身的属性值来代替state中的属性
const mapListStateToProps = (state, ownProps) => {
	return {
		lists: getVisibleLists(state, ownProps.filter)
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

const ListContainer = 
	connect(
		mapListStateToProps,
		// mapListDispatchToProps
		// 如果mapDispatchToProps里面的各种方法都是一个纯函数, 那么在connect中就可以直接一波带走
		{ toggleState: toggleItem,  addData: addAction}
	)(TodoList)

export default ListContainer