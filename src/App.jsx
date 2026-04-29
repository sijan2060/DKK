import { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { CartProvider } from './contexts/CartContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from './routes/ProtectedRoute';

import CartDrawer from './components/ui/CartDrawer';
import { SkeletonPage } from './components/ui/Skeleton';
import './App.css';

// Lazy loaded public pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Dance = lazy(() => import('./pages/Dance'));
const Journey = lazy(() => import('./pages/Journey'));
const TypesOfDance = lazy(() => import('./pages/TypesOfDance'));
const Culture = lazy(() => import('./pages/Culture'));
const Dress = lazy(() => import('./pages/Dress'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

// Lazy loaded dashboard views as named exports
const UserDash = lazy(() => 
  import('./pages/DashboardViews').then(({ UserDashboard }) => ({ default: UserDashboard }))
);
const AdminDash = lazy(() => 
  import('./pages/DashboardViews').then(({ AdminDashboard }) => ({ default: AdminDashboard }))
);
const UserBookings = lazy(() => 
  import('./pages/DashboardViews').then(({ BookingsList }) => {
    const Component = BookingsList;
    return { default: (props) => <Component role="user" {...props} /> };
  })
);
const AdminBookings = lazy(() => 
  import('./pages/DashboardViews').then(({ BookingsList }) => {
    const Component = BookingsList;
    return { default: (props) => <Component role="admin" {...props} /> };
  })
);

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <AuthProvider>
      <ThemeProvider>
        <CartProvider>
          <Router>
            <div className="App">
              <Suspense fallback={<SkeletonPage />}>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="dance" element={<Dance />} />
                    <Route path="journey" element={<Journey />} />
                    <Route path="types" element={<TypesOfDance />} />
                    <Route path="culture" element={<Culture />} />
                    <Route path="dress" element={<Dress />} />
                  </Route>

                  {/* Auth Routes */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />

                  {/* Protected User Dashboard */}
                  <Route element={<ProtectedRoute allowedRoles={['user', 'admin']} />}>
                    <Route path="/dashboard" element={<DashboardLayout />}>
                      <Route index element={<UserDash />} />
                      <Route path="bookings" element={<UserBookings />} />
                      {/* Reviews would go here */}
                    </Route>
                  </Route>

                  {/* Protected Admin Panel */}
                  <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                    <Route path="/admin" element={<AdminLayout />}>
                      <Route index element={<AdminDash />} />
                      <Route path="bookings" element={<AdminBookings />} />
                      {/* Users and Reviews manage views would go here */}
                    </Route>
                  </Route>

                </Routes>
              </Suspense>
              <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            </div>
          </Router>
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
