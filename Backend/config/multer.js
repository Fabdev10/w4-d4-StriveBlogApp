import multer from "multer"
import { v2 as cloudinary } from "cloudinary"
import { CloudinaryStorage } from "multer-storage-cloudinary"
 import "dotenv/config";

export default multer({
    storage: new CloudinaryStorage({
        cloudinary,
        params: {
            folder: "test",
            cloud_name: " dshrp3np3",
            api_key:process.env.CLOUDINARY_API_KEY,
            api_secret:process.env.CLOUDINARY_SECRET,

        },
    })
}).single("avatar")