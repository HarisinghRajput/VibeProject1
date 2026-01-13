import api from './api';

export const authService = {
    async register(email, password) {
        const response = await api.post('/register', {
            email,
            password,
        });
        return response.data;
    },

    async login(email, password) {
        // OAuth2 format requires form-data
        const formData = new URLSearchParams();
        formData.append('username', email); // API expects username field but uses email
        formData.append('password', password);

        const response = await api.post('/token', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        return response.data;
    },

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userEmail');
    },

    isAuthenticated() {
        return !!localStorage.getItem('token');
    },

    getToken() {
        return localStorage.getItem('token');
    },

    getUserEmail() {
        return localStorage.getItem('userEmail');
    },
};
