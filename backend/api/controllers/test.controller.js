import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const shouldBeLoggedIn = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) {
      return res.status(403).json({ message: "Token is not valid!" });
    } else {
      // Token is valid, set user information in the request
      res.status(200).json({ message: "you are authenticated" });
      //   req.user = payload;
      next();
    }
  });
};
export const shouldBeAdmin = async (req, res) => {};
