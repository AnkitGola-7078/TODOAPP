import express from "express";
import todoRoutes from "./routes/todo.routes.js";
import cookieParser from "cookie-parser";
import session from "express-session"; 

const app = express();

app.use(express.json());
app.use(cookieParser());

// session pehle lagao
app.use(session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true,
}));

app.use("/api/todos", todoRoutes);

// Test routes
app.get("/user", (req, res) => {
    res.json({ name: "John Doe", email: "john.doe@example.com" });
});

app.get("/set-cookie", (req, res) => {
    res.cookie("name", "user-1");
    res.send("Cookie set");
});

app.get("/get-cookie", (req, res) => {
    res.json(req.cookies);
});

// LOGIN
app.post("/login", (req, res) => {
    const { username } = req.body;
    req.session.user = { username };
    res.send("Login successful");
});

// PROFILE FIXED
app.get("/profile", (req, res) => {
    if (!req.session.user) {
        return res.status(401).send("User not logged in");
    }
    res.send(`Welcome ${req.session.user.username}`);
});

// LOGOUT
app.get("/logout", (req, res) => {
    req.session.destroy();
    res.send("Logged out successfully");
});

export default app;