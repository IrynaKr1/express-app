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

app.post('/tasks', tasksController.createTask);

module.exports = app;
