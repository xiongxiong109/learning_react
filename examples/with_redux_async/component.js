import React from 'react'
import {v1} from 'node-uuid'
export const Button = ({children, onClick, disabled}) => (
	<div>
		<button onClick={(e) => onClick(e)} disabled={disabled}>{children}</button>
		{
			(() => {
				if (disabled) {
					return <span>获取中...</span>
				}
			})()
		}
	</div>
)

const OperItem = ({nm, tips}) => (
	<div>
		<span>{nm} : {tips}</span>
	</div>
)

export const Items = ({opers}) => (
	<div>
		{ opers.map(item => <OperItem key={v1()} {...item} /> ) }
	</div>
)