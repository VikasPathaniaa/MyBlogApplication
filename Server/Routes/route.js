import express from "express";
import { signUpUser, loginUser } from "../controller/user-controler.js";
import upload from "../utils/upload.js";
import { fileUpload, getImage } from "../controller/FileUpload.js";
import { createPost , getAllBlogs} from "../controller/post-controller.js";
import {authenticateToken} from "../controller/jwt-authenticate-token.js"
const router = express.Router();

router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.post("/file/upload", upload.single("file"), fileUpload);
router.get("/file/:filename", getImage);

router.post("/createpost", authenticateToken, createPost);
router.get("/getBlogs" , authenticateToken , getAllBlogs)

export default router;
