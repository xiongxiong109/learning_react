import React from 'react'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
// import HelloComponent from './component/hello'
// IndexRoute 还要配合IndexLink使用, 不然样式又不对了
const RouterApp = () => (
	<Router routes={routes} history={browserHistory} />
)

export default RouterApp