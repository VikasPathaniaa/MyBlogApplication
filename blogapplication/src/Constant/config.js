export const API_NOTIFICATION_MESSAGE = {
  loading: {
    tittle: "loading....",
    message: "data is loading....",
  },
  success: {
    tittle: "success....",
    message: "data is load sucess....",
  },
  responsefailure: {
    tittle: "error....",
    message: "error ocure during fetching data....",
  },
  requestFailure: {
    tittle: "errro",
    message: "an error occure when passig request ",
  },
  networkError: {
    tittle: "network error",
    message: "unable to connect to  the server please check the network ",
  },
};

export const serviceUrl = {
  userSignup: { url: "/signup", method: "POST" },
  userLogin: { url: "/login", method: "POST" },
  uploadFile: { url: "/file/upload", method: "POST" },
  postBlog: { url: "/createpost", method: "POST" },
  getAllBlogs: { url: "/getBlogs", method: "GET", params: true },
  getBlogById: { url: "/getBlogsById", method: "GET", query: true },
  updateBlogById: { url: "/update", method: "PUT", query: true },
  deleteBlog : {url: "/delete" , method:"DELETE" , query:true},
  postComment :{url : "/postNewComment" , method:"POST" },
  getCommentsData : {url: "/getAllComents" , method:"GET" , query:true}
};
 