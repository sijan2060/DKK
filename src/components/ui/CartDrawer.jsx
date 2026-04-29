
import { useCart } from '../../contexts/cartHooks';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import Button from '../ui/Button';
import './CartDrawer.css';

const CartDrawer = ({ isOpen, onClose }) => {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>
            <ShoppingBag size={24} />
            Your Cart ({totalItems})
          </h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-content">
          {items.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag size={48} />
              <h3>Your cart is empty</h3>
              <p>Add some beautiful dance dresses to get started!</p>
              <Button onClick={onClose}>Continue Shopping</Button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                      loading="lazy"
                    />
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p className="cart-item-price">Rs. {item.price.toLocaleString()}</p>
                      <div className="quantity-controls">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="quantity-btn"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="quantity-btn"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span className="total-price">Rs. {totalPrice.toLocaleString()}</span>
                </div>
                <div className="cart-actions">
                  <Button variant="secondary" onClick={onClose}>
                    Continue Shopping
                  </Button>
                  <Button>
                    Checkout
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;