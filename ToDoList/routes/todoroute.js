// List all To-Do items
app.get('/todos', (req, res) => {
    res.json(todos);
    });
    // Create a new To-Do item
    app.post('/todos', (req, res) => {
    const newTodo = {
    id: todos.length + 1,
    title: req.body.title,
    description: req.body.description,
    done: false,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
    });