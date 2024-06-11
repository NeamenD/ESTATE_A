import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/post.controller.js";

const router = express.Router();

// Route to get all posts
router.get("/", getPosts);

// Route to get a single post by ID
router.get("/:id", getPost);

// Route to add a new post (protected by verifyToken middleware)
router.post("/", verifyToken, addPost);

// Route to update an existing post by ID (protected by verifyToken middleware)
router.put("/:id", verifyToken, updatePost);

// Route to delete a post by ID (protected by verifyToken middleware)
router.delete("/:id", verifyToken, deletePost);

export default router;
