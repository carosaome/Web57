const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CategoryProduct = new Schema({
    categoryId: String,
    productId: String
}, {
    timestamps: true,
}
);

module.exports = mongoose.model('CategoryProduct', CategoryProduct)