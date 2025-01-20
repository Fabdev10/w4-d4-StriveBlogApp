import mongoose from "mongoose";
import "dotenv/config";

const blogPostSchema = new mongoose.Schema({
  category: String,
  title: String,
  cover: String,
  readTime: Number,
  author: String,
  content: String,
});

const BlogPost =  mongoose.model(
  "blogposts",
  blogPostSchema
);

export default BlogPost;