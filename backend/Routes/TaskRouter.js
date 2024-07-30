const express = require('express');
const router = express.Router();
const Task = require('../Models/TaskModel'); // assuming Task model is defined in Models/Task.js

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json({ success: true, data: tasks });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch tasks', error: error.message });
    }
});

// Create a new task
router.post('/', async (req, res) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.json({ success: true, message: 'Task created successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to create task', error: error.message });
    }
});

// Update a task by ID
router.put('/:id', async (req, res) => {
    try {
        await Task.findByIdAndUpdate(req.params.id, req.body);
        res.json({ success: true, message: 'Task updated successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update task', error: error.message });
    }
});

// Delete a task by ID
router.delete('/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete task', error: error.message });
    }
});

module.exports = router;
