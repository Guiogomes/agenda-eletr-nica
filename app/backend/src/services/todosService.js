const { Todos } = require('../database/models');

const create = async (data) => {
  const newTodo = await Todos.create(data);
  return newTodo;
};

const read = async () => {
  const todos = await Todos.findAll();
  return todos;
};

const readOne = async (id) => {
  const todo = await Todos.findByPk(id);
  if (!todo) throw new Error('Todo not found');
  return todo;
};

const update = async (id, data) => {
  const todo = await Todos.findByPk(id);
  if(!todo) throw new Error('Todo not found');
  todo.set({ ...data });
  await todo.save();
  return todo;
};

const deleteTodo = async (id) => {
  const todo = await Todos.findByPk(id);
  if(!todo) throw new Error('Todo not found');
  await todo.destroy();
  return todo;
};

module.exports = {
  create,
  read,
  readOne,
  update,
  deleteTodo,
};