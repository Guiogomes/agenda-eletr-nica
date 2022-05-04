const todosService = require('../services/todosService');

const create = async (req, res) => {
  const newTodo = await todosService.create(req.body);
  return res.status(201).json(newTodo);
};

const read = async (req, res) => {
  const todos = await todosService.read();
  return res.status(200).json(todos);
}

const readOne = async (req, res) => {
  const todo = await todosService.readOne(req.params.id);
  return res.status(200).json(todo);
}

const update = async (req, res) => {
  const todo = await todosService.update(req.params.id, req.body);
  return res.status(200).json(todo);
};

const deleteTodo = async (req, res) => {
  const todo = await todosService.deleteTodo(req.params.id);
  return res.status(200).json(todo);
}