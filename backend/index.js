const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());

const DB_FILE = "./users.json";

// Helper functions
function readUsersFromFile() {
    const data = fs.readFileSync(DB_FILE, "utf-8");
    return JSON.parse(data);
}

function writeUsersToFile(users) {
    fs.writeFileSync(DB_FILE, JSON.stringify(users, null, 2));
}

// 📥 CREATE
app.post("/users", (req, res) => {
    const users = readUsersFromFile();
    const newUser = { id: Date.now(), name: req.body.name };
    users.push(newUser);
    writeUsersToFile(users);
    res.status(201).json(newUser);
});

// 📄 READ ALL
app.get("/users", (req, res) => {
    const users = readUsersFromFile();
    res.json(users);
});

// 📄 READ ONE
app.get("/users/:id", (req, res) => {
    const users = readUsersFromFile();
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
});

// ✏️ UPDATE
app.put("/users/:id", (req, res) => {
    let users = readUsersFromFile();
    const index = users.findIndex(u => u.id == req.params.id);
    if (index === -1) return res.status(404).json({ message: "User not found" });

    users[index].name = req.body.name;
    writeUsersToFile(users);
    res.json(users[index]);
});

// ❌ DELETE
app.delete("/users/:id", (req, res) => {
    let users = readUsersFromFile();
    const newUsers = users.filter(u => u.id != req.params.id);
    if (newUsers.length === users.length) return res.status(404).json({ message: "User not found" });

    writeUsersToFile(newUsers);
    res.json({ message: "User deleted" });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
