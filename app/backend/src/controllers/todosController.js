const todosService = require('../services/todosService');

const create = async (req, res) => {
  try {
    const newTodo = await todosService.create(req.body);
    return res.status(201).json(newTodo);
  } catch(e) {
    return res.status(500).json({error: e.message});
  }

};

const read = async (req, res) => {
  try {
    const todos = await todosService.read();
    return res.status(200).json(todos);
  } catch(e) {
    return res.status(500).json({error: e.message});
  }
}

const readOne = async (req, res) => {
  try {
    const todo = await todosService.readOne(req.params.id);
    return res.status(200).json(todo);
  } catch(e) {
    return res.status(404).json({error: e.message});
  }
}

const update = async (req, res) => {
  try {
    const todo = await todosService.update(req.params.id, req.body);
    return res.status(200).json(todo);
  } catch(e) {
    return res.status(404).json({error: e.message});
  }
};

const deleteTodo = async (req, res) => {
  try{
    const todo = await todosService.deleteTodo(req.params.id);
    return res.status(200).json(todo);
  } catch(e) {
    return res.status(404).json({error: e.message});
  }
}

module.exports = {
  create,
  read,
  readOne,
  update,
  deleteTodo,
}