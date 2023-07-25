import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  postid: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});


const Comment =  mongoose.model("comments" , commentSchema)

export default Comment