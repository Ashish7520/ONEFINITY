import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { getAllTasks, addTask, updateTask, deleteTask } from "./util/api";
import styles from "./styles.module.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const tasksData = await getAllTasks();
      setTasks(tasksData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddTask = async (title) => {
    try {
      const newTask = await addTask(title);
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleTask = async (id, completed) => {
    try {
      const updatedTask = await updateTask(id, !completed);
      setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 style={{ color: "var(--dark-color)" }}>Todo App</h1>
      <TaskForm addTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        toggleTask={handleToggleTask}
        deleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default App;
