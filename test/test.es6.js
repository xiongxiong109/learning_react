"use strict";

const expect = require('chai').expect;

describe('test Mocha with es6', () => {

	it('should return hello world', () => {

		let str = 'hello world';
		expect('hello world').to.equal(str)

	})

})