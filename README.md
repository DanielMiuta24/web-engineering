# Assignment 1: Node.js Static File Server

This is the first assignment for the **Web Engineering** course. The goal is to create a simple Node.js server that serves static HTML files based on the requested URL.

---

## 📁 Files Structure

```
assignment-1/
├── index.js             # Node.js server
├── index.html           # Home page
├── about.html           # About page
├── contact-me.html      # Contact page
└── 404.html             # Custom 404 error page
```

---

## 🚀 How to Run

### 1. Clone the repository and navigate to the assignment folder:

```bash
git clone https://github.com/your-username/web-engineering.git
cd web-engineering/assignment-1
```

### 2. Run the server using Node.js:

```bash
node index.js
```

The server will start on port `3000` by default.

---

## 🌐 Available Routes

| URL                                 | Description             |
|-------------------------------------|-------------------------|
| `http://localhost:3000/`            | Serves `index.html`     |
| `http://localhost:3000/about`       | Serves `about.html`     |
| `http://localhost:3000/contact-me`  | Serves `contact-me.html`|
| Any other URL                       | Serves `404.html`       |

---

## 📌 Notes

- No frameworks were used (e.g., Express) — this assignment uses only core `http` and `fs` modules.
- Ideal for understanding the basics of routing and static file serving in Node.js.

---

## 📚 Course

**Web Engineering – Assignment 1**
