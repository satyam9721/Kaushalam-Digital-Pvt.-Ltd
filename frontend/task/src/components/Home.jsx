import React, { useState, useEffect } from 'react';
import Task from './Task';
import PropTypes from 'prop-types';
import { fetchTasks, createTask } from '../api/taskApi';
import './Home.css';


const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const loadTasks = async () => {
      const tasksFromDB = await fetchTasks();
      setTasks(tasksFromDB);
    };
    loadTasks();
  }, []);

  const addTask = async () => {
    if (newTask.trim() !== '') {
      const task = {
        text: newTask,
        completed: false,  // Initialize the completed property as false
      };
      const addedTask = await createTask(task);
      setTasks([...tasks, addedTask]);
      setNewTask('');
    }
  };

  return (
    <>
    
    <div className="App">
      <div className="task-input">
        <span>Task Description</span>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
          required
        />
        <button className="add" onClick={addTask}>Add Task</button>
      </div>
      <span>Task Details</span>
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task
            key={task._id}
            task={task}
            index={index}
            setTasks={setTasks}
            tasks={tasks}
          />
        ))}
      </div>
    </div>
    </>
  );
};

// Prop Types for validation
Home.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,  // Prop validation for completed status
    })
  ).isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default Home;
