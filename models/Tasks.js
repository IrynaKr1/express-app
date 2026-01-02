const tasksDB = [
  {
    id: '1',
    title: 'Buy groceries',
    description: 'Get milk, bread, cheese, yogurt and vegetables for dinner',
    isDone: false,
    createdAt: '2026-01-02',
  },
  {
    id: '2',
    title: 'Schedule dentist appointment',
    description: 'Call the clinic and book a routine checkup',
    isDone: false,
    createdAt: '2026-01-01',
  },
  {
    id: '3',
    title: 'Walk the dog',
    description: 'Evening walk with Rex, at least 30 minutes',
    isDone: true,
    createdAt: '2026-01-02',
  },
  {
    id: '4',
    title: 'Pay utility bills',
    description: 'Electricity, internet and rent - due by January 10th',
    isDone: false,
    createdAt: '2026-01-02',
  },
  {
    id: '5',
    title: 'Clean the bathroom',
    description: 'Wash the tub, toilet and floor',
    isDone: false,
    createdAt: '2026-01-02',
  },
  {
    id: '6',
    title: 'Prepare presentation for meeting',
    description: '15 slides about Q4 project results',
    isDone: false,
    createdAt: '2025-12-30',
  },
  {
    id: '7',
    title: 'Call mom',
    description: 'Talk about weekend plans',
    isDone: true,
    createdAt: '2026-01-02',
  },
  {
    id: '8',
    title: 'Wash the car',
    description: 'Go to car wash, vacuum the interior',
    isDone: false,
    createdAt: '2026-01-01',
  },
  {
    id: '9',
    title: 'Email colleague about project',
    description: 'Reply to questions regarding the shared project',
    isDone: false,
    createdAt: '2026-01-02',
  },
  {
    id: '10',
    title: 'Pick up package from parcel locker',
    description: 'Pickup code: 1234 5678, valid until tomorrow',
    isDone: false,
    createdAt: '2026-01-02',
  },
];

class TasksDB {
  constructor (arr) {
    this.tasks = [...arr];
  }

  getTasks () {
    return [...this.tasks];
  }

  getTaskById (id) {
    const findTaskById = this.tasks.findIndex(t => t.id === id);
    return findTaskById === -1 ? null : this.tasks[findTaskById];
  }
}

const tasksDbInstance = new TasksDB(tasksDB);
module.exports = tasksDbInstance;
