const Task = require('../models/Task.js');

exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const { text } = req.body;
  const task = await Task.create({ text });
  res.json(task);
};
exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { text, completed } = req.body;
    const task = await Task.findByIdAndUpdate(id, { text, completed }, { new: true });
    res.json(task);
  };
  
  exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.send('Task deleted');
  };