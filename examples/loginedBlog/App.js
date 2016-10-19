import React from 'react'
import {Router, browserHistory} from 'react-router'
import rootRouter from './router'

class BlogApp extends React.Component {
	componentDidMount() {
		console.log(this.props)
	}
	render() {
		return (
			<Router routes={rootRouter} history={browserHistory}/>
		)
	}
}

export default BlogApp