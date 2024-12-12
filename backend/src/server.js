const express = require('express');
const connectDB = require('./config/db.js');
const taskRoutes = require('./routes/taskRouts.js');
const cors = require('cors');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));