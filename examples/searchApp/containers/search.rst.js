// 搜索结果
import { connect } from 'react-redux'
import store from '../store'
import { saveLocalState, configKeys } from '../../../service/localStorage'
import { updateSearchStore, clearCurrentSearch } from '../actions'
import RstList from '../components/search.rst'

const { saveKey } = configKeys; // 本地存储的key

const mapStateToProps = (state) => {

	let filterArr = state.searchRst.map(str => {
		// 读取state的searchValue值, 遍历searchRst数组, 将匹配到的关键字进行加粗显示
		return {
			html: str.replace(state.searchValue, `<strong>${state.searchValue}</strong>`), // 用于展示数据
			str // 用于存储到本地localStorage
		};
	});

	return {
		resultArr: filterArr
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		saveClick(str) {
			/*
				先判断当前搜索记录中有无相同数据, 如果没有相同数据
				将用户搜索数据存入本地
			*/
			let curStore = store.getState().searchStore;
			if (!_.find(curStore, item => item === str)) {
				dispatch(updateSearchStore(str));
				saveLocalState({searchStore: store.getState().searchStore}, saveKey);
			}
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