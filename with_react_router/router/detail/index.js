import React from 'react'
import NavBar from '../../component/NavBar'
const Detail = (props) => (
	<div>
		<p>detail: {props.params.path}-{props.params.detail}</p>
	</div>
)

export default Detail