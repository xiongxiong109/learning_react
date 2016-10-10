import { connect } from 'react-redux'
import { removeItem, clearStore, updateSearchValue, updateSearchRst } from '../actions'
import { saveLocalState, fetchLocalState, configKeys } from '../../../service/localStorage'
import SearchStore from '../components/search.store'

let { saveKey } = configKeys;

const mapStateToProps = (state) => {
	return {
		storeData: state.searchStore
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		removeStoreItem(id) {
			// 删除localStorage中的数据
			let {searchStore} = fetchLocalState(saveKey), updateStore;
			console.log(searchStore)
			updateStore = [...searchStore.slice(0, id), ...searchStore.slice(id + 1)];
			console.log(updateStore)
			saveLocalState({searchStore: updateStore}, saveKey);

			// 清空视图状态
			dispatch(removeItem(id))
		},
		clearSearchStore() {
			// 清空localStorage状态
			saveLocalState({searchStore: []}, saveKey)
			// 清空视图状态
			dispatch(clearStore())
		},
		// 重新搜索历史字段
		researchItem(searchStr) {
			dispatch(updateSearchValue(searchStr))
		}
	}
}

const SearchStoreContainer = connect(mapStateToProps, mapDispatchToProps)(SearchStore);

export default SearchStoreContainer