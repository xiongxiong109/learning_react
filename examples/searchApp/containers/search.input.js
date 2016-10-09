// with react redux
import { connect } from 'react-redux'
import * as _ from 'lodash'
import { updateSearchRst, updateSearchValue } from '../actions'
import jsonp from '../../../service/jsonp'
import SearchIpt from '../components/search.input'

// 节流阀函数, 减缓输入查询的次数
const throttleSearch = _.throttle( (v, cb) => {
	jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su', v, (rst) => {
		cb && cb(rst.s);
	})
}, 500)

const mapStateToProps = (state) => {
	// 将searchIpt的searchValue与react的prop绑定起来
	return {
		searchValue: state.searchValue
	}

}

const mapDispatchToProps = (dispatch) => {

	return {

		updateSearch(e, v) {
			throttleSearch(v, rstList => {
				// console.log(v) // 搜索字段
				// console.log(rstList) 
				// 存入搜索字段
				dispatch(updateSearchValue(v));
				// 搜索结果字段
				dispatch(updateSearchRst(rstList));
			})
		}

	}

}

const SearchIptContainer = connect(mapStateToProps, mapDispatchToProps)(SearchIpt)

export default SearchIptContainer