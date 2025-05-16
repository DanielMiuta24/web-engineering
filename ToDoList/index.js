const express = require('express');
const app = express();
const port = 3000;
const path = require('path'); // Require the 'path'

const ejs = require('ejs'); 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
// Middleware for parsing JSON data
app.use(express.json());
app.get('/todo-list', (req, res) => {
    res.render('todo-list', { todos });
    });
// Dummy data (replace with a database later)
const todos = [
{ id: 1, title: 'Buy groceries', description: 'Milk, eggs, bread', done: false },
{ id: 2, title: 'Complete homework', description:'Math assignment', done: true },
];
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });


