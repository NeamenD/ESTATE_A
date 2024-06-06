import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    //hash password

    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);
    //create a new user and save to db

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log(newUser);
    res.status(200).json({ message: "User crated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create user!" });
  }

  //db operations
  //   console.log(req.body);
};
export const login = (req, res) => {
  //db operations
};
export const logout = (req, res) => {
  //db operations
};
