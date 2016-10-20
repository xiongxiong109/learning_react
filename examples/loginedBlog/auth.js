// 用户身份验证
import {v4} from 'node-uuid'
const md5 = require('md5/md5');

export const doLogin = (uname, upwd) => {
	let str = md5(`${uname}${upwd}${v4()}`);
	localStorage.token = str;
	return str;
}

export const isLogined = () => {
	return localStorage.token ? true : false;
}