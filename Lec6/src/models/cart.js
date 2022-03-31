const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Cart = new Schema({
    id: ObjectId,
    userId: String,
    products:[]
}, {
    timestamps: true,
}
);

module.exports = mongoose.model('Cart', Cart)