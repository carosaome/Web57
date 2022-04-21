const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    id: ObjectId,
    username: String,
    passwork: hashpash,
    phoneNumber: Number,
}, {
    timestamps: true,
});

const CitizenProfile = new Schema({
    id: ObjectId,
    userId: {
        type : mongoose.Types.ObjectId,
        ref:'User'
    },
    avatar: String,
    displayName: String,
    verified: Boolean,
    quest: [],
    bio: String,
    badges:String,
    reviews:[],
}, {
    timestamps: true,
});
const HeroProfile = new Schema({
    id: ObjectId,
    userId: {
        type : mongoose.Types.ObjectId,
        ref:'User'
    },
    avatar: String,
    displayName: String,
    verified: Boolean,
    questDone: [],
    bio: String,
    badges:String,
    reviews:[],
    supperPowers:[]
}, {
    timestamps: true,
});

const Quest = new Schema({
    id: ObjectId,
    createdBy: {
        type : mongoose.Types.ObjectId,
        ref:'User'
    },
    tag:[],
    title: String,
    desc: String,
    price: Number,
    location: String,
    time: String,
    heroRequired: Boolean,
    completionDate: String,
    payment: String,
    heroBid: [],
    requires: [],
    comment: []
}, {
    timestamps: true,
});

const Activity = new Schema({
    id: ObjectId,
    createdBy: {
        type : mongoose.Types.ObjectId,
        ref:'User'
    },
    bid:[],
    role:[offersent, process]
}, {
    timestamps: true,
});
const Bid = new Schema({
    id: ObjectId,
    createdBy: {
        type : mongoose.Types.ObjectId,
        ref:'User'
    },
    questId: id,
    content: String,
    priceBid:Number,
}, {
    timestamps: true,
});
const Message = new Schema({
    id: ObjectId,
    createdBy: {
        type : mongoose.Types.ObjectId,
        ref:'User'
    },
    converstationId: {
        type : mongoose.Types.ObjectId,
        ref:'Converstation'
    },
    content: String
}, {
    timestamps: true,
});
const Convertation = new Schema({
    id: ObjectId,
    member:[id, id],
    role: [active, expired],
    questId: id,
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', User)