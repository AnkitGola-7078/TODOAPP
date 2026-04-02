import express from "express";
import { getTodos, createTodo, updateTodo } from "../controllers/todo.controller.js";
import { validateTodo } from "../middleware/validate.Todo.middleware.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", validateTodo, createTodo);
router.put("/:id", validateTodo, updateTodo); 

export default router;