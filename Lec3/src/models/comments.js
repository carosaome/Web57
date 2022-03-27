const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Comment = new Schema({
  id: ObjectId,
  postId: String,
  content: String ,
  createdBy: String,
},{
  timestamps: true, 
}
);

 module.exports = mongoose.model('Comment', Comment)