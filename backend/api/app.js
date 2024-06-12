import express from "express";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";

const app = express();
// Enable Cross-Origin Resource Sharing (CORS) to allow requests from the client URL specified in the environment variable
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
// Middleware to parse incoming JSON requests
app.use(express.json());
// Middleware to parse cookies from incoming requests
app.use(cookieParser());
// Route for authentication-related requests
app.use("/api/auth", authRoute);
// Route for user-related requests
app.use("/api/users", userRoute);
// Route for post-related requests
app.use("/api/posts", postRoute);
// Route for testing-related requests
app.use("/api/test", testRoute);

app.listen(8800, () => {
  console.log("Server is running");
});
