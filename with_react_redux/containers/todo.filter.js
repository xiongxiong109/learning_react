// todo filter
import { connect } from 'react-redux'
import { setFilter } from '../action'
import { TodoFilter } from '../components'

const mapFilterStateToProps = (state) => {

	return {
		currentFilter: state.Visiblity
	}

}

const mapFilterDispatchToProps = (dispatch) => {
	return {
		setVisibility(filter) {
			dispatch(setFilter(filter))
		}
	}
}

const FilterContainer = connect(
	mapFilterStateToProps,
	mapFilterDispatchToProps
)(TodoFilter)

export default FilterContainer