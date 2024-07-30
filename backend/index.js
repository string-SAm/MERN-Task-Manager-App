const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 3001; // Ensure backend runs on 3001
const TaskRouter = require('./Routes/TaskRouter');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors()); // Enable CORS

app.get('/', (req, res) => {
    res.send('Hello from the server');
});

app.use(bodyParser.json());
app.use('/tasks', TaskRouter);

app.listen(PORT, () => {
    console.log(`Server is running on PORT=${PORT}`);
});