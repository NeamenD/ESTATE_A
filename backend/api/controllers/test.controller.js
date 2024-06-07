import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const shouldBeLoggedIn = async (req, res, next) => {
  console.log(req.userId);
  res.status(200).json({ message: "you are authenticated" });
};
export const shouldBeAdmin = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) {
      return res.status(403).json({ message: "Token is not valid!" });
    } else {
      if (!payload.isAdmin) {
        return res.status(403).json({ message: "Not authorized" });
      } else {
        // Token is valid, set user information in the request
        // req.user = payload;
        // next();
      }
    }
    res.status(200).json({ message: "you are authenticated" });
  });
};
