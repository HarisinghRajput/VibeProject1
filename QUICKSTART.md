# Quick Start Guide - Todo App

## Prerequisites

✅ MySQL running on localhost:3306 with `todo_db` database
✅ Backend API already set up in `todo_api` folder
✅ Frontend now set up in `todo_frontend` folder

## Starting the Application

### 1. Start the Backend API

Open a terminal and run:

```bash
cd todo_api
.\venv\Scripts\activate
.\venv\Scripts\uvicorn app.main:app --reload
```

The backend will run on: **http://127.0.0.1:8000**

### 2. Start the Frontend

Open a **NEW** terminal (keep the backend running) and run:

```bash
cd todo_frontend
cmd /c "npm run dev"
```

The frontend will run on: **http://localhost:3000**

## Usage

1. Open your browser and navigate to **http://localhost:3000**
2. Click "Create one" to register a new account
3. Enter your email and password
4. After registration, log in with your credentials
5. Start creating and managing your tasks!

## Features to Test

- ✨ **Registration**: Create a new account
- 🔐 **Login/Logout**: Secure authentication
- ➕ **Add Tasks**: Create new tasks with title and description
- ✅ **Complete Tasks**: Mark tasks as done
- ✏️ **Edit Tasks**: Modify task details
- 🗑️ **Delete Tasks**: Remove tasks with confirmation
- 🔍 **Filter Tasks**: View All, Active, or Completed tasks
- 📊 **Statistics**: See total, completed, and pending counts

## Troubleshooting

### Backend Issues
- Ensure MySQL is running
- Verify database `todo_db` exists
- Check backend is running on port 8000

### Frontend Issues
- Ensure backend is running first
- Check no other app is using port 3000
- Clear browser localStorage if login issues occur

### CORS Errors
- The backend has been updated with CORS support
- If you see CORS errors, restart the backend server

## Architecture

```
Frontend (React)          Backend (FastAPI)         Database (MySQL)
http://localhost:3000  →  http://127.0.0.1:8000  →  localhost:3306
```

## Next Steps

- Explore the beautiful UI with glassmorphic design
- Test all CRUD operations
- Try the responsive design on different screen sizes
- Check out the smooth animations and transitions

Enjoy your new Todo App! 🎉
