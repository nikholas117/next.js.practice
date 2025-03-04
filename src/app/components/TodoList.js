"use client";

import { useState } from "react";
import "./TodoList.css"; // Importing the CSS file

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  // Add task
  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  // Remove task
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div className="todo-list-container">
      <h1 className="todo-list-title">Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="Enter a task"
      />
      <button onClick={addTask} className="add-task-btn">
        Add Task
      </button>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            {task}
            <button
              onClick={() => removeTask(index)}
              className="remove-task-btn"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {/* Dark Mode Toggle Button */}
      <button onClick={toggleDarkMode} className="toggle-btn">
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}
