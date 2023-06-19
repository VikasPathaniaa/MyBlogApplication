import express from "express";
import { signUpUser, loginUser } from "../controller/user-controler.js";
import upload from "../utils/upload.js";
import { fileUpload , getImage } from "../controller/FileUpload.js";
const router = express.Router();

router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.post("/file/upload", upload.single("file"), fileUpload);
router.get("/file/:filename" , getImage);

export default router;
