# ✅ To-Do List Application (Full Stack)

A full-stack To-Do List app built with **Node.js**, **Express**, and **MongoDB** (via **Mongoose**) for the backend API, and **Vue 3 + Vite** for a modern and dynamic frontend.

---

## 📚 Table of Contents

- [Project Description](#project-description)  
- [Features](#features)  
- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
  - [Backend Setup](#backend-setup)  
  - [Frontend Setup](#frontend-setup)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)  

---

## 📌 Project Description

This application allows users to **Create**, **Read**, **Update**, and **Delete** tasks. The backend exposes a RESTful API with MongoDB storage, and the frontend is a Vue 3 application that interacts with this API and provides real-time updates.

---

## 🚀 Features

- Add new tasks  
- Mark tasks as completed or not completed  
- Delete tasks  
- Real-time UI updates using Vue  
- Reusable `TodoItem.vue` component  
- Axios for API communication  
- Proxy setup in Vite for dev

---

## 🧰 Prerequisites

- **Node.js** v14 or higher  
- **MongoDB** running locally (`127.0.0.1:27017`)  
- **npm** package manager  
- **Git** (for cloning repo)

---

## ⚙️ Installation

### 🔽 Clone the Repository

```bash
git clone https://github.com/DanielMiuta24/web-engineering.git
cd web-engineering/assignment-2
```

### 🔧 Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd assignment-2/backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Ensure MongoDB is running:
   ```bash
   mongod --dbpath ~/data/db
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

> Backend API will run at `http://localhost:3000`

---

### 🌐 Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Install Axios for API communication:
   ```bash
   npm install axios
   ```

4. (Optional) Set up proxy in `vite.config.js`:
   ```js
   export default {
     server: {
       proxy: {
         '/api': 'http://localhost:3000'
       }
     }
   }
   ```

5. Start the frontend development server:
   ```bash
   npm run dev
   ```

> Frontend app will run at `http://localhost:5173`

---

## ✅ Usage

1. Open the app in your browser: `http://localhost:5173`  
2. Use the input field and click **Add Task** to create a task  
3. Check the box to toggle task completion  
4. Click the 🗑️ icon to delete a task

---

## 🔌 API Endpoints

| Method | Endpoint         | Description            |
|--------|------------------|------------------------|
| GET    | `/api/tasks`     | Retrieve all tasks     |
| POST   | `/api/tasks`     | Add a new task         |
| PUT    | `/api/tasks/:id` | Toggle completion      |
| DELETE | `/api/tasks/:id` | Delete a task by ID    |

**Example `POST /api/tasks` body:**
```json
{
  "title": "My new task"
}
```

---

## 📁 Project Structure

```
assignment-2/
├── backend/
│   ├── index.js               # Express server
│   ├── models/
│   │   └── Task.js            # Mongoose schema
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.vue
│   │   ├── main.js
│   │   ├── style.css
│   │   └── components/
│   │       └── TodoItem.vue
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to fork the project, open an issue, or submit a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Author

Created by **Daniel**, 2025
