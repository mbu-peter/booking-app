import express, { Response, Request } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import cookiePaser from "cookie-parser";
import path from "path";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
const app = express();
app.use(cookiePaser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.listen(7000, () => {
  console.log("Server running on localhost:7000");
});