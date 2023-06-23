import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();
const user = process.env.USER_NAME;
const password = process.env.PASSWORD;

const storage = new GridFsStorage({
  url: `mongodb://${user}:${password}@ac-c0aaey3-shard-00-00.bgw5ljp.mongodb.net:27017,ac-c0aaey3-shard-00-01.bgw5ljp.mongodb.net:27017,ac-c0aaey3-shard-00-02.bgw5ljp.mongodb.net:27017/?ssl=true&replicaSet=atlas-kgj6bp-shard-0&authSource=admin&retryWrites=true&w=majority`,
  options: { useNewUrlParser: true },
  file: (request, file) => {
    let match = ["image/jpg", "image/jpeg"];
    if (match.indexOf(file.memeType === -1)) {
      return `${Date.now()}-blog-${file.originalname}`;
    }
    return {
      bucketname: "photos",
      fileName: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

export default multer({ storage });
