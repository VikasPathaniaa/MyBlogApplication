import Comment from "../model/comment-schema.js";

export const postComment = async (request, response) => {
  try {
    let data = await new Comment(request.body);
    await data.save();
    response.status(200).json({ msg: "comment save successfully" });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const getComments = async (request, response) => {
  try {
    const data = await Comment.find({ postid: request.params.id });
    
   response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ msg: error.message });
  }
};
