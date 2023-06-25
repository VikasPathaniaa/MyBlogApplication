import Post from "../model/post.js";
export const createPost = async (request, response) => {
  try {
    const postData = await new Post(request.body);
    const validationError = postData.validateSync();
    if (validationError) {
      return response.status(400).json({ msg: "please fill required fields" });
    }
    postData.save();
    return response.status(200).json({ msg: "data Posted Successfully" });
  } catch (error) {
    return response.status(500).json(error);
  }
};

export const getAllBlogs = async (request, response) => {
  let blogs;
  let category = request.query.category;
  try {
    if (category) {
      blogs = await Post.find({ categories: category });
    } else {
      blogs = await Post.find({});
    }
    return response.status(200).json(blogs);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
