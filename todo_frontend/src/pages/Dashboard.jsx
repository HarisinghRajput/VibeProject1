import { useState } from 'react';
import { taskService } from '../services/taskService';
import Header from '../components/Layout/Header';
import TaskStats from '../components/Tasks/TaskStats';
import TaskForm from '../components/Tasks/TaskForm';
import TaskList from '../components/Tasks/TaskList';
import Toast from '../components/UI/Toast';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [refresh, setRefresh] = useState(0);
    const [toast, setToast] = useState(null);

    const showToast = (message, type = 'success') => {
        setToast({ message, type });
    };

    const handleTaskCreated = async (taskData) => {
        try {
            await taskService.createTask(taskData);
            setRefresh(prev => prev + 1); // Trigger task list refresh
            showToast('Task created successfully!');
            return true;
        } catch (error) {
            showToast('Failed to create task', 'error');
            return false;
        }
    };

    const handleTasksLoaded = (loadedTasks) => {
        setTasks(loadedTasks);
    };

    return (
        <div className="dashboard">
            <Header />

            <div className="dashboard-content">
                <div className="container">
                    <TaskStats tasks={tasks} />

                    <TaskForm onTaskCreated={handleTaskCreated} />

                    <TaskList refresh={refresh} onTasksLoaded={handleTasksLoaded} />
                </div>
            </div>

            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </div>
    );
};

export default Dashboard;
