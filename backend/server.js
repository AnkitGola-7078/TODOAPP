import express from "express";
import connectDB from "./src/config/db.js";
import app from "./src/app.js";
import todoRoutes from "./src/routes/todo.routes.js";
app.use(express.json());

// DB connect
connectDB();

app.listen(5000, () => {
  console.log("Server running on port 5000");
});