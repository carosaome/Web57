const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Bought = new Schema({
    id: ObjectId,
    useId: { type : mongoose.Types.ObjectId},
    categoryIdBought: { type : mongoose.Types.ObjectId}
}, {
    timestamps: true,
}
);

module.exports = mongoose.model('Bought', Bought)