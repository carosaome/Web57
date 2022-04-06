const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    id: ObjectId,
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    role:{
        type: String,
        require: true,
        default: 'user'
    }
}, {
    timestamps: true,
}
);

module.exports = mongoose.model('User', User)