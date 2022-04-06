const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Category = new Schema({
    id: ObjectId,
    categoryName: {
        type: String,
        require: true,
    }
}, {
    timestamps: true,
}
);

module.exports = mongoose.model('Category', Category)