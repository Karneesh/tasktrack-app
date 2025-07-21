import React, { useState } from 'react';
import './App.css'; // Or use Tailwind CSS for styling

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), description: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <h1>TaskTrack</h1>

      <div className="task-input-section">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className="task-input"
        />
        <button onClick={handleAddTask} className="add-task-button">
          Add Task
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
              className="task-checkbox"
            />
            <span className="task-description">{task.description}</span>
            <button onClick={() => handleDeleteTask(task.id)} className="delete-task-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;