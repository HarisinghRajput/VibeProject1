import api from './api';

export const taskService = {
    async getTasks() {
        const response = await api.get('/tasks');
        return response.data;
    },

    async createTask(taskData) {
        const response = await api.post('/tasks', {
            title: taskData.title,
            description: taskData.description || '',
            completed: false,
        });
        return response.data;
    },

    async updateTask(taskId, taskData) {
        const response = await api.put(`/tasks/${taskId}`, taskData);
        return response.data;
    },

    async deleteTask(taskId) {
        const response = await api.delete(`/tasks/${taskId}`);
        return response.data;
    },

    async toggleComplete(taskId, currentStatus) {
        const response = await api.put(`/tasks/${taskId}`, {
            completed: !currentStatus,
        });
        return response.data;
    },
};
