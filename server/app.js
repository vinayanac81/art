import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./config/db.js";
import AdminRoutes from "./routes/adminRoutes.js"
import UserRoutes from "./routes/userRoutes.js"
import { fileURLToPath } from "url";
import path from "path";
const app = express();

dotenv.config();
connect();
const PORT = process.env.PORT || 1000;
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));
app.use(cors([{ origin: "http://localhost:5173" },{ origin: "https://fivegworldd.onrender.com"}]));
app.use("/admin", AdminRoutes);
app.use("/",UserRoutes)

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
