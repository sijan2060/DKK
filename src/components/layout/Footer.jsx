import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Dilip Dance</h3>
            <p className="footer-description">
              Celebrating Nepali dance culture through learning, tradition, and beautiful dance attire.
              Join us in preserving and sharing the rich heritage of Nepali dance forms.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/dance">Dance Overview</Link></li>
              <li><Link to="/types">Types of Dance</Link></li>
              <li><Link to="/culture">Nepali Culture</Link></li>
              <li><Link to="/journey">Our Journey</Link></li>
              <li><Link to="/dress">Dance Dresses</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/shipping">Shipping Info</Link></li>
              <li><Link to="/returns">Returns & Exchanges</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+977 123 456 789</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@dilipdance.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Dilip Dance. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;