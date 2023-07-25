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
  let totalPages;
  let pageSize = 4;
  let category = request.query.category;
  let currentPage = request.query.page;

  console.log("requestQuery", request.query);
  try {
    if (category) {
      const totalBlogs = await Post.count({ categories: category });

      blogs = await Post.find({ categories: category })
        .skip(pageSize * (currentPage - 1))
        .limit(pageSize)
        .exec();
      totalPages = Math.ceil(totalBlogs / 4);
    } else {

      const totalBlogs = await Post.count({});
      blogs = await Post.find({})
        .skip(pageSize * (currentPage - 1))
        .limit(pageSize)
        .exec();
      totalPages = Math.ceil(totalBlogs / 4);
    }
    
    return response.status(200).json({
      totalPages,
      currentPage,
      blogs,
    });
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getBlogById = async (request, response) => {
  try {
    let id = await request.params.id;
    let data = await Post.findById(id);
    return response.status(200).json(data);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const updateById = async (request, response) => {
  try {
    let post = await Post.findById(request.params.id);
    if (!post) {
      return response.status(404).json({ msg: "No Post found " });
    }
    await Post.findByIdAndUpdate(request.params.id, { $set: request.body });
    return response.status(200).json({ msg: "data Updated Successfully" });
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const deleteBlog = async (request, response) => {
  console.log(request.params.id, "request.params.idrequest.params.id");
  try {
    let post = await Post.findById(request.params.id);

    if (!post) {
      return response.status(400).json("Post not found");
    }

    console.log("post", post);
    await post.deleteOne(); // Assuming you're using Mongoose, use deleteOne() instead of delete()

    return response.status(200).json("Post deleted successfully");
  } catch (error) {
    return response.status(500).json({ msg: error.message });
  }
};
