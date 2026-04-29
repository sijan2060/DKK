import { useContext } from 'react';
import { AuthContext } from './authContext';

/**
 * Hook to consume the AuthContext.
 * Lives in its own file so react-refresh/only-export-components is satisfied.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
