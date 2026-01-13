import { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for existing auth on mount
        const storedToken = authService.getToken();
        const storedEmail = authService.getUserEmail();

        if (storedToken && storedEmail) {
            setToken(storedToken);
            setUser({ email: storedEmail });
        }
        setLoading(false);
    }, []);

    const register = async (email, password) => {
        try {
            await authService.register(email, password);
            return { success: true };
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.detail || 'Registration failed'
            };
        }
    };

    const login = async (email, password) => {
        try {
            const data = await authService.login(email, password);
            const accessToken = data.access_token;

            localStorage.setItem('token', accessToken);
            localStorage.setItem('userEmail', email);

            setToken(accessToken);
            setUser({ email });

            return { success: true };
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.detail || 'Login failed'
            };
        }
    };

    const logout = () => {
        authService.logout();
        setToken(null);
        setUser(null);
    };

    const value = {
        user,
        token,
        login,
        register,
        logout,
        isAuthenticated: !!token,
        loading,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
