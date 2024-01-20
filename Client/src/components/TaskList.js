import React from "react";
import Task from "./Task";
import styles from "../styles.module.css";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul className={styles.taskList}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
