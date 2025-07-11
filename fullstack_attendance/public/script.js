const BASE_URL = "http://localhost:3000"; // update if deployed

// Fetch and display students in the table
async function fetchStudents() {
  const res = await fetch(`${BASE_URL}/api/students`);
  let students = await res.json();

  // Sort students by rollNumber (alphanumeric)
  students.sort((a, b) => a.rollNumber.localeCompare(b.rollNumber, undefined, { numeric: true }));

  const form = document.getElementById("attendanceForm");
  form.innerHTML = `
    <table>
      <thead>
        <tr><th>Roll Number</th><th>Name</th><th>Present</th></tr>
      </thead>
      <tbody>
        ${students.map(s => `
          <tr>
            <td>${s.rollNumber}</td>
            <td>${s.name}</td>
            <td><input type="checkbox" name="attendance" value="${s.rollNumber}" /></td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}




// Submit attendance and trigger CSV download
async function submitAttendance() {
  const checkboxes = document.querySelectorAll("input[name='attendance']");
  const section = document.getElementById("section").value.trim();
  const branch = document.getElementById("branch").value.trim();
  const year = document.getElementById("year").value.trim();

  if (!section || !branch || !year) return alert("Please fill section, branch, and year");

  const res = await fetch(`${BASE_URL}/api/students`);
  const students = await res.json();

  const attendance = students.map(student => ({
    rollNumber: student.rollNumber,
    name: student.name,
    present: [...checkboxes].some(cb => cb.value === student.rollNumber && cb.checked)
  }));

  const response = await fetch(`${BASE_URL}/api/attendance`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ section, branch, year, attendance })
  });

  const { file } = await response.json();
  window.location.href = `${BASE_URL}/${file}`; // Download CSV
}

// Add new student
async function addStudent() {
  const roll = document.getElementById("newRoll").value.trim();
  const name = document.getElementById("newName").value.trim();

  if (!roll || !name) return alert("Please enter both roll number and name");

  const res = await fetch(`${BASE_URL}/api/students`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rollNumber: roll, name: name })
  });

  const data = await res.json();
  alert(data.message);
  document.getElementById("newRoll").value = "";
  document.getElementById("newName").value = "";
  fetchStudents();
}

// Delete student by roll number
async function deleteStudent() {
  const roll = document.getElementById("deleteRoll").value.trim();
  if (!roll) return alert("Enter roll number to delete");

  const res = await fetch(`${BASE_URL}/api/students/${roll}`, {
    method: "DELETE"
  });

  const data = await res.json();
  alert(data.message);
  document.getElementById("deleteRoll").value = "";
  fetchStudents();
}

// Load students when page loads
window.onload = fetchStudents;
