import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkLoggedIn = async () => {
            let token = localStorage.getItem('token');
            if (token) {
                try {
                    // Ideally we would verify token with backend here
                    // For now we decode or just assume valid if structure is ok
                    // But better: fetch user profile
                    // Since backend might not have /me endpoint yet, we will just simulate for now
                    // OR: check if headers work on a protected route.
                    // Let's assume for this MVP that presence of token = logged in
                    // We can decode if it's a JWT but let's keep it simple.
                    setUser({ token });
                } catch (err) {
                    localStorage.removeItem('token');
                    setUser(null);
                }
            }
            setLoading(false);
        };
        checkLoggedIn();
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        setUser({ token });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
