import React from "react";
import styles from "../styles.module.css";

const Task = ({ task, toggleTask, deleteTask }) => {
  return (
    <li className={`${styles.task} ${task.completed && styles.completed}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id, task.completed)}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.title}
      </span>
      <button className={`${styles.btn}`} onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
};

export default Task;
