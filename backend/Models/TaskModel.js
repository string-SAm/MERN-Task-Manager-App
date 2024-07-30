const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', taskSchema);
