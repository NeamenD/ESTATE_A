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

    res.serHeader("Set-Cookie", "test" + "myValue");
    //generate cookie token and send to user
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to login!" });
  }
};
export const logout = (req, res) => {
  //db operations
};
