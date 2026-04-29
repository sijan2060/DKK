import { useReducer, useEffect } from 'react';
import { CartContext } from './cartContext';

// ─── Reducer ────────────────────────────────────────────────────────────────
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items
          .map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: Math.max(0, action.payload.quantity) }
              : item
          )
          .filter(item => item.quantity > 0),
      };

    case 'CLEAR_CART':
      return { ...state, items: [] };

    default:
      return state;
  }
};

// ─── Provider ────────────────────────────────────────────────────────────────
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Rehydrate from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        parsedCart.items?.forEach(item => {
          dispatch({ type: 'ADD_TO_CART', payload: item });
        });
      } catch {
        // Corrupted storage — start fresh
      }
    }
  }, []);

  // Persist on every state change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const addToCart    = (product)             => dispatch({ type: 'ADD_TO_CART',     payload: product });
  const removeFromCart = (productId)         => dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  const updateQuantity = (productId, qty)    => dispatch({ type: 'UPDATE_QUANTITY',  payload: { id: productId, quantity: qty } });
  const clearCart    = ()                    => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider
      value={{ items: state.items, totalItems, totalPrice, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};