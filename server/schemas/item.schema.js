// list item schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 列表元素属性
var ItemSchema = new Schema({
	id: Number,
	txt: String,
	isCompleted: Boolean
});

// dao
// statics方法是直接给model constructor用的
ItemSchema.statics.fetch = function(cb) {
	return this.find({}, cb);
}
// methods方法则是给实例用的?

module.exports = ItemSchema