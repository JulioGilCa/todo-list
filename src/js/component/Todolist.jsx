import React, { useState } from "react";
import "../../styles/index.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskCount, setTaskCount] = useState(0);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const task = event.target.value;
      if (task) {
        setTasks((prevTasks) => [...prevTasks, task]);
        setTaskCount((prevTaskCount) => prevTaskCount + 1);
        event.target.value = "";
      }
    }
  };

  const handleDeleteTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, i) => i !== index)
    );
    setTaskCount((prevTaskCount) => prevTaskCount - 1);
  };

  return (
    <div className="container col-xl-4 col-8">
      <div className="header">
        <h1>Todo List</h1>
        <p>Tareas: {taskCount}</p>
      </div>
      <div>
        <input className="input-box w-100"
          type="text"
          placeholder="Añade una tarea, pulsa Enter"
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className="task-box">
        {tasks.length === 0 ? (
          <p className="my-3">No hay tareas, añade tareas</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <div className="viewTask">
                <li key={index}>
                  <div>{task}</div>
                </li>
                <button
                  className="addTask"
                  onClick={() => handleDeleteTask(index)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoList;
