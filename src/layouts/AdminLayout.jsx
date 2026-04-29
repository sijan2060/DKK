import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authHooks';
import { useTheme } from '../contexts/themeHooks';
import { Sun, Moon, LogOut, LayoutDashboard, Users, CalendarDays, Star, Home } from 'lucide-react';
import './DashboardLayout.css'; // Reuse sidebar dashboard styles

const AdminLayout = () => {
  const { logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container admin-theme">
      {/* Sidebar */}
      <aside className="dashboard-sidebar glass-effect">
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo">Deep Kala Admin</Link>
          <span className="admin-badge">Admin Panel</span>
        </div>
        
        <nav className="sidebar-nav">
          <Link to="/admin" className="sidebar-link">
            <LayoutDashboard size={20} /> Overview
          </Link>
          <Link to="/admin/bookings" className="sidebar-link">
            <CalendarDays size={20} /> Manage Bookings
          </Link>
          <Link to="/admin/users" className="sidebar-link">
            <Users size={20} /> Manage Users
          </Link>
          <Link to="/admin/reviews" className="sidebar-link">
            <Star size={20} /> All Reviews
          </Link>
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="sidebar-link back-home">
            <Home size={20} /> Public Site
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
            Admin Portal
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

export default AdminLayout;
