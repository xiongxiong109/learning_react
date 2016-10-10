import React from 'react'
import SearchIptContainer from './containers/search.input'
import SearchRstContainer from './containers/search.rst'
import SearchStoreContainer from './containers/search.store'

require('./style.css')

export const SearchApp = () => (
	<div className="search-app">
		<SearchIptContainer />
		<SearchRstContainer />
		<SearchStoreContainer />
	</div>
)