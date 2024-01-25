import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState(["A", "B", "C"]);
  const [newTask, setNewTask] = useState("");

  function handleInput(e) {
    setNewTask(e.target.value);
  }

  function handleaddTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function handledeleteTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  function handlemoveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index - 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index - 1]
      ];
      setTasks(updatedTasks);
    }
  }

  function handlemoveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list-container">
      <h1>To-Do-List</h1>

      <div className="add-task-container">
        <input
          type="text"
          placeholder="Enter a task.."
          value={newTask}
          onChange={handleInput}
        />
        <button className="add-button" onClick={handleaddTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span className="text"> {task} </span>
            <button
              className="task-up-button"
              onClick={() => handlemoveTaskUp(index)}
            >
              Up🔼
            </button>
            <button
              className="task-down-button"
              onClick={() => handlemoveTaskDown(index)}
            >
              Down🔽
            </button>
            <button
              className="delete-button"
              onClick={() => handledeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
