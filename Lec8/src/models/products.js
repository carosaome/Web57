const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Products = new Schema({
    title: String,
    slugTitle: {type:String, slug:"title", unique:true},
    description: String,
    slugDesc: {type:String, slug:"title", unique:true},
    rating: Number,
    viewCount: Number,
    imageUrl: String,
    tags: [],
    category: String,
    price: Number,
    sellQuantity: Number, // số lượng bán ra
    stockQuantity: Number // số lượng tồn kho
}, {
    timestamps: true,
}
);

module.exports = mongoose.model('Products', Products)