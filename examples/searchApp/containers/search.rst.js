// 搜索结果
import { connect } from 'react-redux'
import RstList from '../components/search.rst'

const mapStateToProps = (state) => {
	return {
		resultArr: state.searchRst
	}
} 

const SearchRstContainer = connect(
	mapStateToProps
)(RstList);

export default SearchRstContainer