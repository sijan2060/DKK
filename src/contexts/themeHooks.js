import { useContext } from 'react';
import { ThemeContext } from './themeContext';

/**
 * Hook to consume the ThemeContext.
 * Lives in its own file so react-refresh/only-export-components is satisfied.
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
