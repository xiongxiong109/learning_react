// 图表化redux 开发工具
import React from 'react'
import { createDevTools } from 'redux-devtools'
import ChartMonitor from 'redux-devtools-chart-monitor'

const Monitor = createDevTools(
	<ChartMonitor />
)

export default Monitor