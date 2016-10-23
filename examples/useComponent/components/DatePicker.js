// 时间选择器
import React, { PropTypes } from 'react'

const DatePicker = ({children, updateDate, dateType}) => (
	<div>
		<label>
			{children}
			<input type="date" onChange= { e => updateDate(e.currentTarget.value, dateType) }/>
		</label>
	</div>
)

DatePicker.propType = {
	updateDate: PropTypes.func,
	dateType: PropTypes.string
}

export default DatePicker