const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Post = new Schema({
  id: ObjectId,
  content: String ,
  createdBy: String,
},{
  timestamps: true, 
}
);

 module.exports = mongoose.model('Post', Post)