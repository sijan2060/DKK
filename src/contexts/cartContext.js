import { createContext } from 'react';

/**
 * Raw CartContext object.
 * Kept in its own file so react-refresh/only-export-components is satisfied:
 * this file only exports a React context (no components, no hooks).
 */
export const CartContext = createContext();
