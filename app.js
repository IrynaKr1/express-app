const express = require('express');
const { validate, errorHandlers } = require('./middleware');
const { tasksController } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('App result');
});

app.get('/tasks', tasksController.getTasks);

app.get('/tasks/:id', tasksController.getTaskById);

app.post('/tasks', validate.validateTaskOnCreate, tasksController.createTask);

app.patch(
  '/tasks/:id',
  validate.validateTaskOnUpdate,
  tasksController.updateTaskById
);

app.delete('/tasks/:id', tasksController.deleteTaskById);

app.use(errorHandlers.validationErrorHandler, errorHandlers.errorHandler);
module.exports = app;
