import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authHooks';
import { useTheme } from '../contexts/themeHooks';
import { Sun, Moon, LogOut, Home, Calendar, Star, User } from 'lucide-react';
import './DashboardLayout.css';

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar glass-effect">
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo">Deep Kala</Link>
        </div>
        
        <nav className="sidebar-nav">
          <Link to="/dashboard" className="sidebar-link">
            <User size={20} /> Profile
          </Link>
          <Link to="/dashboard/bookings" className="sidebar-link">
            <Calendar size={20} /> My Bookings
          </Link>
          <Link to="/dashboard/reviews" className="sidebar-link">
            <Star size={20} /> My Reviews
          </Link>
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="sidebar-link back-home">
            <Home size={20} /> Back to Site
          </Link>
          <button className="sidebar-link logout-btn" onClick={handleLogout}>
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        <header className="dashboard-header glass-effect">
          <div className="header-greeting">
            Welcome back, {user?.name || 'Student'}!
          </div>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </header>

        <div className="dashboard-content animate-fade-in-up">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
