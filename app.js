const { validate } = require('./middleware');
const { tasksController } = require('./controllers');

const express = require('express');
const { TasksDB } = require('./models');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('App result');
});

app.get('/tasks', tasksController.getTasks);

app.get('/tasks/:id', tasksController.getTaskById);

app.post('/tasks', validate.validateTaskOnCreate, tasksController.createTask);

app.patch('/tasks/:id', tasksController.updateTaskById);

app.delete('/tasks/:id', tasksController.deleteTaskById);

module.exports = app;
