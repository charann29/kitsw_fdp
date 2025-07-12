# Faculty Task Management System

## Objective
Design and develop a web-based application for faculties to manage their daily academic tasks and schedules, such as lectures, meetings, assignments, and reviews. The app supports task creation, editing, status tracking, and deadline management.

## Tech Stack
- **Frontend**: React.js (Hooks, Axios, React Router)
- **Backend**: Express.js (Node.js)
- **Database**: MongoDB with Mongoose
- **Tooling**: Thunder Client / Postman for API testing, GitHub for version control

## Users
- **Faculty (Default User Role)** *(No authentication for now, but can be extended in Phase 2 with JWT)*

## Core Features

### 1. Task Management (CRUD)
- Add task
- View all tasks
- View task by ID
- Update task (mark as completed, edit title/deadline)
- Delete task

### 2. Status Filtering
- View tasks by status: pending / completed / overdue

## Minimum Required APIs (at least 6)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/tasks` | Create a new task |
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get a single task by ID |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |
| GET | `/api/tasks/status/:status` | Filter tasks by status (pending/completed/overdue) |

## Task Schema (MongoDB)

```javascript
{
  title: String,
  description: String,
  dueDate: Date,
  status: {
    type: String,
    enum: ['pending', 'completed', 'overdue'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

## Frontend Pages
- **Dashboard** – Show summary: total tasks, pending, completed
- **All Tasks** – Table view with edit/delete buttons
- **Add Task** – Form with title, description, due date
- **Edit Task** – Pre-filled form
- **Filter View** – Tabs for pending, completed, overdue

## Folder Structure

### Backend (Express)
```
/backend
├── controllers
│   └── taskController.js
├── models
│   └── Task.js
├── routes
│   └── taskRoutes.js
├── config
│   └── db.js
├── server.js
```

### Frontend (React)
```
/frontend
├── src
│   ├── components
│   │   └── TaskCard.jsx, TaskForm.jsx
│   ├── pages
│   │   └── Dashboard.jsx, AllTasks.jsx, AddTask.jsx, EditTask.jsx
│   ├── services
│   │   └── taskService.js
│   ├── App.js
│   └── index.js
```

## Bonus / Stretch Goals
- Deadline reminder (highlight if overdue)
- Search tasks by title
- Calendar integration using `react-calendar`
- Role-based login using JWT (Phase 2)

## Outcome
This project demonstrates:
- Full CRUD with MongoDB and Mongoose
- RESTful API design
- React functional components and hooks
- Real-world problem-solving using MERN stack
- Clean folder structure and modular code
- Thoughtful UX for faculty users

---

*Capstone Project for Faculty Task Management System*
