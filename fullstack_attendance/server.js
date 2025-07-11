const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const { generateCsv } = require("./utils/generateCsv");

const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// Load students
app.get("/api/students", (req, res) => {
  const students = JSON.parse(fs.readFileSync("students.json"));
  res.json(students);
});

// Submit attendance
app.post("/api/attendance", (req, res) => {
  const { section, branch, year, attendance } = req.body;
  const csv = generateCsv(attendance);
  const filename = `Attendance_${new Date().toISOString().split("T")[0]}.csv`;

  fs.writeFileSync(path.join(__dirname, "public", filename), csv);
  res.json({ message: "Attendance submitted", file: filename });
});

// CRUD - Add student
app.post("/api/students", (req, res) => {
  const newStudent = req.body;
  const students = JSON.parse(fs.readFileSync("students.json"));
  students.push(newStudent);
  fs.writeFileSync("students.json", JSON.stringify(students, null, 2));
  res.json({ message: "Student added successfully" });
});

// CRUD - Delete student
app.delete("/api/students/:rollNumber", (req, res) => {
  const roll = req.params.rollNumber;
  let students = JSON.parse(fs.readFileSync("students.json"));
  students = students.filter(s => s.rollNumber !== roll);
  fs.writeFileSync("students.json", JSON.stringify(students, null, 2));
  res.json({ message: "Student deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
