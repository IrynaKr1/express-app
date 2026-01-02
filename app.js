const { tasksController } = require('./controllers');

const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('App result');
});

app.get('/tasks', tasksController.getTasks);

module.exports = app;
