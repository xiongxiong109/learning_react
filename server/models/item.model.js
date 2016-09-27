// item models
var mongoose = require('mongoose');
var ItemSchema = require('../Schemas/item.schema');

var ItemModel = mongoose.model('Item', ItemSchema);

module.exports = ItemModel;