const { response } = require('../app');
const { TasksDB } = require('./../models');

module.exports.getTasks = (req, res) => {
  const tasks = TasksDB.getTasks();
  res.status(200).send(tasks);
};

module.exports.getTaskById = (req, res) => {
  const { id } = req.params;

  const foundTask = TasksDB.getTaskById(id);

  if (foundTask) {
    return res.status(200).send(foundTask);
  }
  res.status(404).send('Task did not exist');
};

module.exports.createTask = (req, res) => {
  const { body } = req;

  const createTask = TasksDB.createTask(body);

  res.status(201).send(createTask);
};
