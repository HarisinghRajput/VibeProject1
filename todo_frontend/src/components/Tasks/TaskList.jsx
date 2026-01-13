import { useState, useEffect } from 'react';
import { taskService } from '../../services/taskService';
import TaskItem from './TaskItem';
import Toast from '../UI/Toast';

const TaskList = ({ refresh, onTasksLoaded }) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all'); // all, active, completed
    const [toast, setToast] = useState(null);

    const showToast = (message, type = 'success') => {
        setToast({ message, type });
    };

    const fetchTasks = async () => {
        try {
            const data = await taskService.getTasks();
            setTasks(data);
            if (onTasksLoaded) {
                onTasksLoaded(data);
            }
        } catch (error) {
            showToast('Failed to load tasks', 'error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, [refresh]);

    const handleToggleComplete = async (taskId, currentStatus) => {
        try {
            await taskService.toggleComplete(taskId, currentStatus);
            await fetchTasks();
            showToast('Task updated successfully');
        } catch (error) {
            showToast('Failed to update task', 'error');
        }
    };

    const handleUpdate = async (taskId, taskData) => {
        try {
            await taskService.updateTask(taskId, taskData);
            await fetchTasks();
            showToast('Task updated successfully');
        } catch (error) {
            showToast('Failed to update task', 'error');
        }
    };

    const handleDelete = async (taskId) => {
        try {
            await taskService.deleteTask(taskId);
            await fetchTasks();
            showToast('Task deleted successfully');
        } catch (error) {
            showToast('Failed to delete task', 'error');
        }
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    if (loading) {
        return (
            <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
                <div className="spinner spinner-large" style={{ margin: '0 auto' }} />
                <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                    Loading tasks...
                </p>
            </div>
        );
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Your Tasks</h3>
                </div>

                {/* Filter Buttons */}
                <div className="filter-group">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All ({tasks.length})
                    </button>
                    <button
                        className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
                        onClick={() => setFilter('active')}
                    >
                        Active ({tasks.filter(t => !t.completed).length})
                    </button>
                    <button
                        className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
                        onClick={() => setFilter('completed')}
                    >
                        Completed ({tasks.filter(t => t.completed).length})
                    </button>
                </div>

                {/* Task List */}
                {filteredTasks.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-state-icon">📝</div>
                        <p>
                            {filter === 'all' && 'No tasks yet. Create your first task above!'}
                            {filter === 'active' && 'No active tasks. Great job!'}
                            {filter === 'completed' && 'No completed tasks yet.'}
                        </p>
                    </div>
                ) : (
                    <div className="task-list">
                        {filteredTasks.map((task) => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                onToggleComplete={handleToggleComplete}
                                onUpdate={handleUpdate}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                )}
            </div>

            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </>
    );
};

export default TaskList;
