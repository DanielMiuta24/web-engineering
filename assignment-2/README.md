# To-Do List Application

A simple To-Do List app built with **Node.js**, **Express**, and **MongoDB** (using **Mongoose**) for managing tasks through both a web UI and a RESTful API.

---

## Table of Contents

- [Project Description](#project-description)  
- [Features](#features)  
- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Project Description

This application allows users to **Create**, **Read**, **Update**, and **Delete** tasks in a to-do list. Tasks are stored in MongoDB and modeled via Mongoose schemas.

---

## Features

- Create new tasks  
- Mark tasks as completed or pending  
- Delete tasks  
- Instant UI updates in the browser  

---

## Prerequisites

- **Node.js** v14 or higher  
- **MongoDB** server running on `127.0.0.1:27017`  

---

## Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/DanielMiuta24/web-engineering.git
   cd assignment-2
   ```
2. **Install dependencies**  
   ```bash
   npm install express mongoose body-parser cors
   ```
3. **Ensure MongoDB is running** (in a separate terminal)  
   ```bash
   mongod --dbpath ~/data/db
   ```
4. **Start the server**  
   ```bash
   npm start
   ```

---

## Usage

1. Open your browser to `http://localhost:3000/`.  
2. Add a task via the input field and click **Add**.  
3. Toggle completion status using the checkbox.  
4. Remove tasks with the **Delete** button.  

---

## API Endpoints

- **POST** `/api/tasks`  
  - Create a new task  
  - Body:  
    ```json
    { "title": "Task name" }
    ```
- **GET** `/api/tasks`  
  - Retrieve all tasks  
- **PUT** `/api/tasks/:id`  
  - Update a task’s `completed` status:  
    ```json
    { "completed": true }
    ```
- **DELETE** `/api/tasks/:id`  
  - Delete a task by its ID  

---

## Project Structure

```
├── public/index.html             # Static UI (index.html, CSS, client JS)
├── models/
│   └── Task.js         # Mongoose schema for tasks
├── server.js           # Express server and API routes
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

---

## Contributing

Feel free to open issues or submit pull requests. For major changes, please open an issue first to discuss your proposal.

---

## License

This project is licensed under the [MIT License](LICENSE).
