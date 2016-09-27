/*
	mapStateToProps //管理store中的状态变化
	mapDispatchToProps // 处理redux中的事件方法
	并通过connect把redux store与 react props绑定到一起
	然后store里面的所有变化都交给Provider来控制
*/
// connect型组件
import IptContainer from './todo.ipt'
import ListContainer from './todo.list'
import FilterContainer from './todo.filter'
module.exports = { IptContainer, ListContainer, FilterContainer }