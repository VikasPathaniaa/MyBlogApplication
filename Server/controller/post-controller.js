import post from "../model/post.js";
export const createPost = async (request, response) => {
  try {
    const postData = await new post(request.body);
    postData.save();
    return response.status(200).json({ msg: "data Posted Successfully" });
  } catch (error) {
    return response.status(500).json(error);
  }
};
