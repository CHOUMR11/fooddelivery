import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path"; // Add this line to import the 'path' module

// Utilisation de import.meta.url pour obtenir __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// app config
const app = express();

// port config
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// dist reactjs
app.use(express.static(path.join(__dirname, './client/build'))); // Route pour les pages non trouvées, redirige vers index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// server start
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
