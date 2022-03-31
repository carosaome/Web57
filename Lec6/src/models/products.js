const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema({
    id: ObjectId,
    productName: {
        type: String,
        require: true,
    },
    productPrice: {
        type: String,
        require: true,
    },
    productDesc: {
        type: String,
        require: true,
    },
    productImg:{
        type: String,
        require: true,
    }
}, {
    timestamps: true,
}
);

module.exports = mongoose.model('Product', Product)