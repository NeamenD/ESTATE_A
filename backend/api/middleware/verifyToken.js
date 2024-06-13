import jwt from "jsonwebtoken";

// Middleware function to verify JWT token
export const verifyToken = (req, res, next) => {
  // Middleware function to verify JWT token
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Unauthorized" });
  // Verify the token using the secret key
  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    // If there is an error during verification, respond with a 403 Forbidden status
    if (err) return res.status(403).json({ message: "Token is not valid!" });
    req.userId = payload.id;

    next();
  });
};
