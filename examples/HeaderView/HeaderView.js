// 通用App可配置头部
import React from 'react'
import {v4} from 'node-uuid'
import * as _ from 'lodash'
import './base.css'

class HeaderView extends React.Component {
	render() {
		const props = this.props;
		return (
			<div className={'headerWrap'}>
				<div className={'headerIconWrap'} style={
					{
						'width': `${40 * Math.max(props.left.length, 1)}px`
					}
				}>
				{props.left.map(icon => <a href="javascript:void(0);" className={'headerIcon'} key={v4()}>{icon.txt}</a>)}
				</div>
				<div className={'headerTitle'}>
					{(() => {
						if (_.isObject(props.title)) {
							return (
							<h1 className={'doubleLineTitle'}>
								<span className={'ellipsis'}>{props.title.main}</span>
								<sm className={'ellipsis'}>{props.title.subTitle}</sm>
							</h1>)
						} else if (_.isString(props.title)) {
							return <h1 className={'simpleLineTitle ellipsis'}>{props.title || 'Hello App'}</h1>
						}
					})()}
				</div>
				<div className={'headerIconWrap'}>
					{props.right.map(icon => <a href="javascript:void(0);" className={'headerIcon'} key={v4()}>{icon.txt}</a>)}
				</div>
			</div>
		)
	}
}

HeaderView.defaultProps = {
	title: 'Hello React',
	// title: {
	// 	main: 'Hello React',
	// 	subTitle: 'xiongxiong109'
	// },
	left: [
		{
			'icon': '',
			'txt': '<',
			'url': '/html'
		},
		// {
		// 	'icon': '',
		// 	'txt': 'H'
		// }
	],
	right: [
		{
			'icon': '',
			'txt': '客服',
			'url': '/html'
		},
		// {
		// 	'icon': '',
		// 	'txt': '咨询'
		// }
	]
}

export default HeaderView