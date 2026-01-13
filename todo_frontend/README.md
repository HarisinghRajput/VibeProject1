# Todo App - React Frontend

A modern, beautiful React frontend for the Todo API with user authentication and task management.

## Features

✨ **Modern UI**: Glassmorphic design with dark mode and smooth animations
🔐 **Authentication**: Secure login and registration with JWT tokens
📝 **Task Management**: Full CRUD operations (Create, Read, Update, Delete)
🎯 **Filtering**: View all, active, or completed tasks
📊 **Statistics**: Real-time task completion tracking
📱 **Responsive**: Optimized for mobile, tablet, and desktop
⚡ **Fast**: Built with Vite for lightning-fast development and builds

## Tech Stack

- **React 18** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Vite** - Build tool and dev server
- **CSS3** - Custom styling with CSS variables

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- The Todo API backend running on `http://127.0.0.1:8000`

## Installation

1. Navigate to the project directory:
```bash
cd todo_frontend
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Auth/              # Login and Registration forms
│   ├── Layout/            # Header and ProtectedRoute
│   ├── Tasks/             # Task-related components
│   └── UI/                # Reusable UI components
├── context/
│   └── AuthContext.jsx    # Global authentication state
├── pages/
│   ├── Login.jsx          # Login page
│   ├── Register.jsx       # Registration page
│   └── Dashboard.jsx      # Main dashboard
├── services/
│   ├── api.js             # Axios instance with interceptors
│   ├── authService.js     # Authentication API calls
│   └── taskService.js     # Task API calls
├── App.jsx                # Main app component with routing
├── App.css                # Component styles
├── index.css              # Global styles and design system
└── main.jsx               # Entry point
```

## Usage

### Registration
1. Navigate to the registration page
2. Enter your email and password
3. Click "Create Account"
4. You'll be redirected to login

### Login
1. Enter your registered email and password
2. Click "Login"
3. You'll be redirected to the dashboard

### Managing Tasks
- **Create**: Fill in the "Add New Task" form and click "Add Task"
- **View**: All your tasks are displayed in the task list
- **Complete**: Click the checkbox next to a task
- **Edit**: Click "Edit" button, modify details in the modal, and save
- **Delete**: Click "Delete" button and confirm
- **Filter**: Use the filter buttons to view All, Active, or Completed tasks

## API Integration

The frontend connects to the backend API at `http://127.0.0.1:8000`. All requests include the JWT token in the Authorization header.

### Endpoints Used:
- `POST /register` - User registration
- `POST /token` - User login (OAuth2 format)
- `GET /tasks` - Get all user tasks
- `POST /tasks` - Create a new task
- `PUT /tasks/{id}` - Update a task
- `DELETE /tasks/{id}` - Delete a task

## Authentication Flow

1. User logs in and receives a JWT token
2. Token is stored in localStorage
3. All API requests include the token in the Authorization header
4. On 401 Unauthorized, user is automatically logged out
5. Protected routes redirect to login if not authenticated

## Design System

### Colors
- Primary: Purple-blue gradient
- Background: Dark (#0f0f23)
- Surface: Glassmorphic with backdrop blur
- Success: Green (#10b981)
- Danger: Red (#ef4444)

### Typography
- Font: Inter (Google Fonts)
- Weights: 400, 500, 600, 700

### Effects
- Glassmorphism with backdrop-filter
- Smooth transitions and animations
- Hover effects and micro-interactions

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

This project is created for demonstration purposes.
