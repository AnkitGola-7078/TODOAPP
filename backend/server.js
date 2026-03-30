import express from "express";
import connectDB from "./src/config/db.js";

import todoRoutes from "./src/routes/todo.routes.js";

const app = express();
app.use(express.json());

// DB connect
connectDB();

// Routes
app.use("/api/todos", todoRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});