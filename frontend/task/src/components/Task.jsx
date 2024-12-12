import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { updateTask, deleteTask } from '../api/taskApi';
// import './Task.css';

const Task = ({ task, tasks, setTasks, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  // Function to toggle the task's completed status
  const handleToggle = async () => {
    const updatedTask = await updateTask(task._id, { ...task, completed: !task.completed });
    setTasks(tasks.map((t) => (t._id === task._id ? updatedTask : t)));
  };

  const handleDelete = async () => {
    await deleteTask(task._id);
    setTasks(tasks.filter((t) => t._id !== task._id));
  };

  const handleUpdate = async () => {
    const updatedTask = await updateTask(task._id, { ...task, text: editedText });
    setTasks(tasks.map((t) => (t._id === task._id ? updatedTask : t)));
    setIsEditing(false);
  };

  return (
    <div className={`task ${task.completed ? 'done' : ''}`}>
      <div className="task-content">
        {/* Checkbox for toggling completion */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          title="Mark as completed"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <span>{index + 1}. {task.text}</span>
        )}
      </div>
      <div className="task-buttons">
        {isEditing ? (
          <button className="btn btn-primary" onClick={handleUpdate}>
            Save
          </button>
        ) : (
          <>
            <button className="btn btn-info" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// Prop Types for validation
Task.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Task;
