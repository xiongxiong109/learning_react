// 搜索结果
import { connect } from 'react-redux'
import { updateSearchStore, clearCurrentSearch } from '../actions'
import RstList from '../components/search.rst'

const mapStateToProps = (state) => {

	let filterArr = state.searchRst.map(str => {
		// 读取state的searchValue值, 遍历searchRst数组, 将匹配到的关键字进行加粗显示
		return str.replace(state.searchValue, '<strong>' + state.searchValue + '</strong>');
	});

	return {
		resultArr: filterArr
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		saveClick(str) {
			// 存入搜索值到本地存储中
			dispatch(updateSearchStore(str));
			// 清空当前搜索列表
			dispatch(clearCurrentSearch());
		}
	}
}

const SearchRstContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(RstList);

export default SearchRstContainer