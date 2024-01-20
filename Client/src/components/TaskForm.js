//this components will take the user input 

import React, { useState } from "react";
import styles from "../styles.module.css";

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div className={styles.taskForm}>
      <form onSubmit={handleSubmit}>
        <input
          className={`${styles.input}`}
          type="text"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className={`${styles.btn}`} type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
