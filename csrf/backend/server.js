const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.json());


app.use(cors({
    origin: true,
    credentials: true
  }));


const csrfProtection = csrf({ cookie: true });

app.get("/api/csrf-token", csrfProtection, (req, res) => {
     res.cookie("XSRF-TOKEN", req.csrfToken(), {
        sameSite: "None",
        secure: true
      });
      
  res.json({ csrfToken: req.csrfToken() });
});

app.post("/api/secure-data", csrfProtection, (req, res) => {
  res.json({ message: "✅ Secure POST request received!" });
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
