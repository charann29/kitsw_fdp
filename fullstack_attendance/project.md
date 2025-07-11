**Project Requirements: Class Attendance Management System**

**Overview:**
Build a comprehensive attendance management system with a Node.js backend and a modern, responsive frontend using HTML, CSS, and JavaScript. Use JSON files as the database for simplicity.

**Frontend Requirements:**

**Header Section:**
- Display class information at the top: Section Name, Branch, and Year
- Clean, professional styling with good visual hierarchy

**Student Management Feature:**
- Include a dedicated section above the attendance table for managing students
- Ability to add, edit, and delete student records
- Form fields for Roll Number and Student Name
- Validation to prevent duplicate roll numbers
- Responsive design with intuitive user interface

**Attendance Table:**
- Display all students in a well-formatted table
- Columns: Roll Number, Student Name, Attendance Status
- Use radio buttons or checkboxes for marking attendance (Present/Absent)
- Clear visual indicators for attendance status
- Sortable by roll number for easy navigation

**Submission & Export:**
- Submit button to process attendance data
- Automatic CSV download upon submission
- CSV format requirements:
  - Filename with today's date
  - Headers: Roll Number, Name, Present (1 for present, 0 for absent)
  - Summary row at the end showing total number of absentees

**Backend Requirements:**

**API Endpoints Needed:**
- GET /students - Retrieve all students
- POST /students - Add new student
- PUT /students/:id - Update student information
- DELETE /students/:id - Remove student
- POST /attendance - Submit attendance and generate CSV
- GET /class-info - Retrieve class details (section, branch, year)

**Data Storage:**
- Use JSON files for data persistence
- Separate files for students data and class information
- Maintain data integrity and handle concurrent access

**Technical Specifications:**
- Node.js with Express.js framework
- RESTful API design
- Proper error handling and validation
- CORS enabled for frontend-backend communication
- Clean, maintainable code structure

**Testing Requirements:**
- Provide sample JSON request bodies for all API endpoints
- Include test scenarios for Thunder Client/Postman
- Cover both success and error cases

**UI/UX Requirements:**
- Modern, responsive design
- Intuitive user experience
- Professional styling with CSS
- Mobile-friendly interface
- Loading states and user feedback
- Form validation with clear error messages

**Additional Features:**
- Confirmation dialogs for destructive actions
- Success/error notifications
- Data validation on both frontend and backend
- Graceful error handling

