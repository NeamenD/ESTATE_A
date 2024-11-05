import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

// Controller to get multiple posts based on query parameters
export const getPosts = async (req, res) => {
  const query = req.query; // Get query parameters from request
  try {
    const posts = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || undefined,
          lte: parseInt(query.maxPrice) || undefined,
        },
      },
    });
    // setTimeout(() => {
    res.status(200).json(posts); // Respond with the list of posts
    // }, 500);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get posts" }); // Respond with error message
  }
};

// Controller to get a single post by ID
export const getPost = async (req, res) => {
  const id = req.params.id; // Get post ID from request parameters
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetail: true,
        user: {
          select: {
            username: true, // Include username of the post creator
            avatar: true, // Include avatar of the post creator
          },
        },
      },
    });

    let userId;

    const token = req.cookies?.token; // Get JWT token from cookies

    if (!token) {
      userId = null;
    } else {
      // Verify the token
      jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if (err) {
          userId = nul;
        } else {
          userId = payload.id;
        }
      });
    }
    // Check if the post is saved by the user
    const saved = await prisma.savedPost.findUnique({
      where: {
        userId_postId: {
          postId: id,
          userId,
        },
      },
    });
    // Respond with post details and saved status
    res.status(200).json({ ...post, isSaved: saved ? true : false });
  } catch (error) {
    console.log(error); // Log error to console
    res.status(500).json({ message: "Failed to get post" }); // Respond with error message
  }
};
// Controller to add a new post
export const addPost = async (req, res) => {
  const body = req.body; // Get request body
  const tokenUserId = req.userId; // Get user ID from token

  try {
    const newPost = await prisma.post.create({
      data: {
        ...body.postData, // Post data from request body
        userId: tokenUserId, // User ID from token
        postDetail: {
          create: body.postDetail,
        },
      },
    });
    res.status(200).json(newPost); // Respond with newly created post
  } catch (error) {
    res.status(200).json();
    console.log(error);
    res.status(500).json({ message: "Failed to create post" });
  }
};
// Controller to update a post
export const updatePost = async (req, res) => {
  try {
    res.status(200).json(); // Respond with success
  } catch (error) {
    console.log(error); // Log error to console
    res.status(500).json({ message: "Failed to update posts" });
  }
};
// Controller to delete a post by ID
export const deletePost = async (req, res) => {
  const id = req.params.id; // Get post ID
  const tokenUserId = req.userId; // Get user ID from token

  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetail: true, // Include related post details
      },
    });

    // Check if the post exists
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the post belongs to the user making the request
    if (post.userId !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorized!" });
    }

    // Delete associated post details first
    if (post.postDetail) {
      await prisma.postDetail.delete({
        where: { id: post.postDetail.id }, // Assuming there's a direct relation via id
      });
    }

    // Delete the post
    await prisma.post.delete({
      where: { id },
    });

    // Respond with success message
    res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    // Log the error for debugging
    console.error("Error deleting post:", error);

    // Respond with error message
    res.status(500).json({ message: "Failed to delete post" });
  }
};
