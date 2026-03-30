import Todo from "../models/todo.model.js";

export const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.send(todo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(todo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo=await Todo.findByIdAndDelete(req.params.id);
    res.send(200).json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { createTodo, getTodos, updateTodo, deleteTodo };