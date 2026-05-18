// src/AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';

// Create the context
const AuthContext = createContext();

// Auth Provider component
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        !!localStorage.getItem('authToken') // Check if token exists on initial load
    );

    // Login function (sets token in localStorage and updates state)
    const login = (token) => {
        localStorage.setItem('authToken', token);
        setIsAuthenticated(true);
    };

    // Logout function (removes token and updates state)
    const logout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
    };

    // Listen for localStorage changes (e.g., from other tabs)
    useEffect(() => {
        const handleStorageChange = () => {
            setIsAuthenticated(!!localStorage.getItem('authToken'));
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for easy access to auth context
export const useAuth = () => useContext(AuthContext);