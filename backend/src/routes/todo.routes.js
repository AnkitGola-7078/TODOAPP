import express from "express";
import { getTodos, createTodo, updateTodo } from "../controllers/todo.controller.js";
import { validateTodo } from "../middleware/validate.Todo.middleware.js";
import {auth} from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", auth, validateTodo, createTodo);
router.put("/:id",updateTodo); 

export default router;