import { useState } from 'react';
import { useCart } from '../../contexts/cartHooks';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import Button from '../ui/Button';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className={`product-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        <div className="product-overlay">
          <button
            className="wishlist-btn"
            onClick={handleWishlist}
            aria-label="Add to wishlist"
          >
            <Heart
              size={20}
              className={isWishlisted ? 'filled' : ''}
            />
          </button>
          <button
            className="quick-view-btn"
            aria-label="Quick view"
          >
            <Eye size={20} />
          </button>
        </div>
        {product.isNew && <span className="product-badge new">New</span>}
        {product.discount && <span className="product-badge discount">-{product.discount}%</span>}
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-price">
          <span className="current-price">Rs. {product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="original-price">Rs. {product.originalPrice.toLocaleString()}</span>
          )}
        </div>

        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`star ${i < product.rating ? 'filled' : ''}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="rating-count">({product.reviewCount})</span>
        </div>

        <Button
          onClick={handleAddToCart}
          className="add-to-cart-btn"
          size="small"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;