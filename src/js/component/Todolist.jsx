import React from "react";
import "../../styles/index.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskCount: 0,
    };
  }

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const task = event.target.value;
      if (task) {
        this.setState((prevState) => ({
          tasks: [...prevState.tasks, task],
          taskCount: prevState.taskCount + 1,
        }));
        event.target.value = "";
      }
    }
  };

  handleDeleteTask = (index) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((_, i) => i !== index),
      taskCount: prevState.taskCount - 1,
    }));
  };

  render() {
    const { tasks, taskCount } = this.state;

    return (
      <div className="d-flex justify-content-center flex-column m-auto col-xl-4 col-8">
        <div className="header">
          <h1>Todo List</h1>
        </div>
        <input
          type="text"
          placeholder="Añade una tarea, pulsa Enter"
          onKeyDown={this.handleKeyPress}
        />
        <p>Tareas: {taskCount}</p>
        {tasks.length === 0 ? (
          <p className="my-3">No hay tareas, añade tareas</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <div>{index.length}</div>
                <div>{task}</div>
                <div>
                  <button
                    className="addTask"
                    onClick={() => this.handleDeleteTask(index)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default TodoList;
