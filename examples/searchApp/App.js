import React from 'react'
import SearchIptContainer from './containers/search.input'
import SearchRstContainer from './containers/search.rst'
import SearchStoreContainer from './containers/search.store'

// require('./style.css')
import style from './style.css'

export const SearchApp = () => (
	<div className={style["search-app"]}>
		<SearchIptContainer />
		<SearchRstContainer />
		<SearchStoreContainer />
	</div>
)