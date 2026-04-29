import { useContext } from 'react';
import { CartContext } from './cartContext';

/**
 * Hook to consume the CartContext.
 * Lives in its own file so react-refresh/only-export-components is satisfied.
 */
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
