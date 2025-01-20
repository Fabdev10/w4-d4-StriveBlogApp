import express from "express";
import {
  getAllBlogPosts,
  getBlogPostById,
  getPaginatedBlogPosts,
  getBlogPagesCount,
  searchBlogPosts,
  createBlog,
  deleteBlog,
  putBlog,
} from "../controllers/Blogpostcontroller.js";

const router = express.Router();
router.get("/", getAllBlogPosts);
router.get("/:id", getBlogPostById);

router.get("/page/:page", getPaginatedBlogPosts);
router.post("/search", searchBlogPosts);

router.post("/new", createBlog);
router.put("/:id", putBlog);
router.delete("/:id", deleteBlog);

export { router };