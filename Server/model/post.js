import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
});

const post = mongoose.model("post", postSchema);

export default post;
