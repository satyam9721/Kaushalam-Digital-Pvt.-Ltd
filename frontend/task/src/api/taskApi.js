import axios from 'axios';

const API_BASE_URL = 'https://backend-n-721u.onrender.com/api/tasks';

export const fetchTasks = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const createTask = async (task) => {
  const response = await axios.post(API_BASE_URL, task);
  return response.data;
};

export const updateTask = async (id, updatedTask) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, updatedTask);
  return response.data;
};

export const deleteTask = async (id) => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};
