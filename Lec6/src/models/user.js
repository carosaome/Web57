const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    id: ObjectId,
    userName: {
        type: String,
        require: true,
    },
    passWord: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
        require: true
    }
}, {
    timestamps: true,
}
);

module.exports = mongoose.model('User', User)