/*
	jsonp
*/
import * as _ from 'lodash'

const jsonpName = `search${new Date().getTime()}`;

const jsonp = (url, querys = '', callback, callBackName = jsonpName) => {

	const defaultQuery = {
		json: 1,
		wd: ''
	}

	let inputQuery = _.extend({}, defaultQuery, {
		wd: querys
	});

	let queryArr = [], queryStr = '', totalUrl = '';

	for (let key in inputQuery) {
		if (!_.isFunction(inputQuery[key])) {
			queryArr.push(`${key}=${inputQuery[key]}`);
		}
	}

	queryStr = queryArr.join('&');

	totalUrl = `${url}?${queryStr}&cb=${callBackName}`;

	createScript(totalUrl, callback, callBackName);

}

const createScript = (src, cb, cbName) => {
	let script = document.createElement('script');

	window[cbName] = (rst) => {
		cb && cb(rst);
	}

	document.body.appendChild(script);
	script.onload = () => {
		script.parentNode.removeChild(script);
	}
	script.src = src;
}

export default jsonp