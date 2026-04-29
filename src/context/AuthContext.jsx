import { useState } from 'react';
import { AuthContext } from './authContext';
import { usersData } from '../data/usersData';

// ─── Provider ────────────────────────────────────────────────────────────────
export const AuthProvider = ({ children }) => {
  const initialState = (() => {
    const storedUser = localStorage.getItem('dilip_user');
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        return {
          user: parsed,
          isAuthenticated: true,
          loading: false,
        };
      } catch {
        localStorage.removeItem('dilip_user');
      }
    }
    return {
      user: null,
      isAuthenticated: false,
      loading: false,
    };
  })();

  const [user, setUser] = useState(initialState.user);
  const [isAuthenticated, setIsAuthenticated] = useState(initialState.isAuthenticated);
  const [loading] = useState(initialState.loading);

  const login = (email, password) => {
    const foundUser = usersData.find(
      u => u.email === email && u.password === password
    );
    if (foundUser) {
      const { password: _, ...safe } = foundUser;
      setUser(safe);
      setIsAuthenticated(true);
      localStorage.setItem('dilip_user', JSON.stringify(safe));
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('dilip_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

