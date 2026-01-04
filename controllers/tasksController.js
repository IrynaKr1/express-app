const createError = require('http-errors');
const { TasksDB } = require('./../models');

module.exports.getTasks = (req, res) => {
  const { page = 1, results = 5 } = req.query;
  const tasks = TasksDB.getTasks(page, results);
  res.status(200).send(tasks);
};

module.exports.getTaskById = (req, res, next) => {
  const { id } = req.params;

  const foundTask = TasksDB.getTaskById(id);

  if (foundTask) {
    return res.status(200).send(foundTask);
  }
  next(createError(404, 'Task did not found'));
};

module.exports.createTask = (req, res) => {
  const { body } = req;

  const createTask = TasksDB.createTask(body);

  res.status(201).send(createTask);
};

module.exports.updateTaskById = (req, res) => {
  const {
    params: { id },
    body,
  } = req;

  const updateTask = TasksDB.updateTask(id, body);

  if (updateTask) {
    return res.status(200).send(updateTask);
  }
  next(createError(404, 'Task did not exist'));
};

module.exports.deleteTaskById = (req, res) => {
  const { id } = req.params;

  const deleteTask = TasksDB.deleteTask(id);

  if (deleteTask) {
    return res.status(204).send();
  }

  next(createError(404, 'Task did not exist'));
};
