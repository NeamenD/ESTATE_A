import prisma from "../lib/prisma.js";
export const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
  } catch (error) {
    res.status(200).json(posts);
    console.log(error);
    res.status(500).json({ message: "Failed to get posts" });
  }
};

export const getPost = async (req, res) => {
  const id = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });
  } catch (error) {
    res.status(200).json(post);
    console.log(error);
    res.status(500).json({ message: "Failed to get post" });
  }
};

export const addPosts = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;

  try {
  } catch (error) {
    res.status(200).json();
    console.log(error);
    res.status(500).json({ message: "Failed to create post" });
  }
};

export const updatePost = async (req, res) => {
  try {
  } catch (error) {
    res.status(200).json();
    console.log(error);
    res.status(500).json({ message: "Failed to update posts" });
  }
};

export const deletePost = async (req, res) => {
  try {
  } catch (error) {
    res.status(200).json();
    console.log(error);
    res.status(500).json({ message: "Failed to delete post" });
  }
};
