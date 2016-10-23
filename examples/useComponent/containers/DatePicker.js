import React from 'react'
import { connect } from 'react-redux'
import DatePicker from '../components/DatePicker'
import { updateDate } from '../actions'

const mapStateToProps = (state) => {
	return state
}
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		updateDate(date, dateType) {
// 			console.log(date);
// 			// dispatch(updateDate(date, dateType))
// 		}
// 	}
// }

const CDatePicker = connect(mapStateToProps, {updateDate})(DatePicker)

export default CDatePicker