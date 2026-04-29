import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/themeHooks';
import { useCart } from '../../contexts/cartHooks';
import { useAuth } from '../../context/authHooks';
import { Menu, X, ShoppingCart, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { totalItems } = useCart();
  const { isAuthenticated, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/dance', label: 'Dance' },
    { path: '/journey', label: 'Journey' },
    { path: '/types', label: 'Types' },
    { path: '/culture', label: 'Culture' },
    { path: '/dress', label: 'Dress' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">Deep Kala Kendra</span>
        </Link>

        <div className="navbar-menu">
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <Link to="/cart" className="cart-link" onClick={closeMenu}>
            <ShoppingCart size={20} />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>

          {isAuthenticated ? (
            <Link to={user?.role === 'admin' ? '/admin' : '/dashboard'} className="auth-link" onClick={closeMenu}>
              Dashboard
            </Link>
          ) : (
            <Link to="/login" className="auth-link" onClick={closeMenu}>
              Login
            </Link>
          )}

          <button
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;