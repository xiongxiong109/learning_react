// 对input container 做connect 包装
import { connect } from 'react-redux'
import { addAction } from '../action'
import { TodoIpt } from '../components'

// 表单输入组件
const mapIptStateToProps = (state) => {
	return {}
}

const mapIptDispatchToProps = (dispatch) => {
	return {
		addTodoItem(v) {
			dispatch(addAction(v))
		}
	}
}

const IptContainer = connect(
	mapIptStateToProps,
	mapIptDispatchToProps
)(TodoIpt)

export default IptContainer