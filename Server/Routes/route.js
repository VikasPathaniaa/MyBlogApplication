import express from "express";
import { signUpUser, loginUser } from "../controller/user-controler.js";
import upload from "../utils/upload.js";
import { fileUpload, getImage } from "../controller/FileUpload.js";
import {
  createPost,
  getAllBlogs,
  getBlogById,
  updateById,
  deleteBlog,
} from "../controller/post-controller.js";
import { authenticateToken } from "../controller/jwt-authenticate-token.js";
import { postComment, getComments } from "../controller/comment-controller.js";
const router = express.Router();

router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.post("/file/upload", upload.single("file"), fileUpload);
router.get("/file/:filename", getImage);

router.post("/createpost", authenticateToken, createPost);
router.get("/getBlogs", authenticateToken, getAllBlogs);
router.get("/getBlogsById/:id", authenticateToken, getBlogById);
router.put("/update/:id", authenticateToken, updateById);
router.delete("/delete/:id", authenticateToken, deleteBlog);

router.post("/postNewComment", authenticateToken, postComment);
router.get("/getAllComents/:id", authenticateToken, getComments);

export default router;
