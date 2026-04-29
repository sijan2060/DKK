import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // For demo purposes, accept any email/password
    alert('Login successful! (Demo mode)');
    navigate('/');

    setIsLoading(false);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Welcome Back</h1>
            <p>Sign in to your Dilip Dance account</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <Input
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="Enter your email"
              required
            />

            <div className="password-input-container">
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                Remember me
              </label>
              <Link to="/forgot-password" className="forgot-password">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="auth-submit-btn"
              loading={isLoading}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          <div className="auth-divider">
            <span>or</span>
          </div>

          <div className="social-auth">
            <Button variant="secondary" className="social-btn">
              <Mail size={20} />
              Continue with Google
            </Button>
          </div>

          <div className="auth-footer">
            <p>
              Don't have an account?{' '}
              <Link to="/register" className="auth-link">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="auth-image">
          <div className="auth-image-content">
            <h2>Continue Your Dance Journey</h2>
            <p>
              Access your personalized learning path, track your progress,
              and connect with our community of dancers.
            </p>
            <div className="auth-features">
              <div className="feature">
                <User size={24} />
                <span>Personal Dashboard</span>
              </div>
              <div className="feature">
                <Lock size={24} />
                <span>Secure Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;