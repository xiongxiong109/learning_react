// 显示结果面板
import React from 'react'
import { connect } from 'react-redux'

const RstPanel = (props) => (
	<div>
		{(() => {
				if (props.from) {
					return <p>出发时间: {props.from}</p>
				}
			})()}
		{(() => {
				if (props.to) {
					return <p>到达时间: {props.to}</p>
				}
			})()}
	</div>
)

const mapStateToProps = (state) => {
	let {from, to} = state.dateInfo;
	return { from, to }
}

const ConnectRstPanel = connect(mapStateToProps)(RstPanel);

export default ConnectRstPanel