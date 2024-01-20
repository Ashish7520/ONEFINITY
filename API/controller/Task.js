const Task = require("../model/Task");

//to get all the to do task
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//to save the to do task in the database
const createTask = async (req, res) => {
  const { title } = req.body;

  try {
    const newTask = await Task.create({ title, completed: false });
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//to update the to do task as completed
const updateTask = async (req, res) => {
  const taskId = req.params.id;
  const { completed } = req.body;

  try {
    const rowsUpdated = await Task.update(
      { completed },
      { where: { id: taskId }, returning: true }
    );

    if (rowsUpdated === 0) {
      res.status(404).json({ error: "Task not found" });
    } else {
      const task = await Task.findAll({ where: { id: taskId } });
      res.json(task);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//to delete the to do task
const deleteTask = async (req, res) => {
  const taskId = req.params.id;

  try {
    const deletedRows = await Task.destroy({ where: { id: taskId } });

    if (deletedRows === 0) {
      res.status(404).json({ error: "Task not found" });
    } else {
      res.status(200).json({ message: "Task deleted successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
