import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

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
    console.log("Error during user registration:", error);
    res.status(500).json({ message: "Failed to create user!" });
  }

  //db operations
  //   console.log(req.body);
};
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    //check if the user exists
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) return res.status(404).json({ message: "invalid credentials!" });
    //check if the password is correct

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid Credentials!" });

    // res.setHeader("Set-Cookie", "test=" + "myValue").json("success");

    const age = 1000 * 60 * 60 * 24 * 7; //1week
    const token = jwt.sign(
      //creating token using secret key
      {
        id: user.id,
        isAdmin: true,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );
    // Exclude the password from the user info
    const { password: _, ...userinfo } = user;
    res
      .cookie("token", token, {
        httpOnly: true,
        //  secure: true
        maxAge: age,
      })
      .status(200)
      .json(userinfo);
    //generate cookie token and send to user
  } catch (error) {
    console.log("Error during login:", error);
    res.status(500).json({ message: "Failed to login!" });
  }
};
export const logout = (req, res) => {
  //db operations
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};
