const mongoose = require('mongoose');
const url="mongodb+srv://swayamsoni1905:swayam@task-manager.q6r9juu.mongodb.net/?retryWrites=true&w=majority&appName=task-manager"

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB is Connected...');
    }).catch((err) => {
        console.log('MongoDB Connection Failed...', err);
    })