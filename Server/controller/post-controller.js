import Post from "../model/post.js";
export const createPost = async (request, response) => {
  try {
    const postData = await new Post(request.body);
    postData.save();
    return response.status(200).json({ msg: "data Posted Successfully" });
  } catch (error) {
    return response.status(500).json(error);
  }
};

export const getAllBlogs = async (request, response) => {
  try {
    let blogs = await Post.find({});
    return response.status(200).json(blogs);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
