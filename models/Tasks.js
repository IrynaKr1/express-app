const tasksDB = [];

class TasksDB {
  constructor (arr) {
    this.tasks = [...arr];
  }
}

const tasksDbInstance = new TasksDB(tasksDB);
module.exports = tasksDbInstance;
