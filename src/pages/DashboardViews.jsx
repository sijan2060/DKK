import { useAuth } from '../context/authHooks';

export const UserDashboard = () => {
  const { user } = useAuth();
  return (
    <div className="card" style={{ padding: '2rem' }}>
      <h2>Hello, {user?.name}</h2>
      <p>Welcome to your personal learning dashboard.</p>
      <div className="grid grid-2" style={{ marginTop: '2rem' }}>
        <div className="card glass-effect" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-primary)' }}>
          <h3>Booking Status</h3>
          <p>You have 1 upcoming class this week.</p>
        </div>
        <div className="card glass-effect" style={{ padding: '1.5rem', borderLeft: '4px solid var(--nepal-blue)' }}>
          <h3>Your Reviews</h3>
          <p>You have left 2 reviews so far. Thank you for your feedback!</p>
        </div>
      </div>
    </div>
  );
};

export const AdminDashboard = () => {
  return (
    <div className="card" style={{ padding: '2rem' }}>
      <h2>System Overview</h2>
      <div className="grid grid-3" style={{ marginTop: '2rem' }}>
        <div className="card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-secondary)' }}>
          <h3>Total Users</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>142</p>
        </div>
        <div className="card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-secondary)' }}>
          <h3>Active Bookings</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-primary)' }}>28</p>
        </div>
        <div className="card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-secondary)' }}>
          <h3>Pending Reviews</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b' }}>4</p>
        </div>
      </div>
    </div>
  );
};

export const BookingsList = ({ role }) => {
  return (
    <div className="card" style={{ padding: '2rem' }}>
      <h2>{role === 'admin' ? 'All Bookings' : 'My Bookings'}</h2>
      <p style={{ color: 'var(--text-secondary)' }}>This is a mock implementation of the booking management table.</p>
      <table style={{ width: '100%', marginTop: '2rem', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--border-color)', textAlign: 'left' }}>
            <th style={{ padding: '1rem' }}>Service</th>
            <th style={{ padding: '1rem' }}>Date</th>
            <th style={{ padding: '1rem' }}>Status</th>
            {role === 'admin' && <th style={{ padding: '1rem' }}>Actions</th>}
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
            <td style={{ padding: '1rem' }}>Lakhey Dance Session</td>
            <td style={{ padding: '1rem' }}>May 10, 2026</td>
            <td style={{ padding: '1rem' }}><span style={{ color: '#10b981', fontWeight: '600' }}>Confirmed</span></td>
            {role === 'admin' && <td style={{ padding: '1rem' }}><button className="btn btn-secondary btn-small">Edit</button></td>}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Wrapper components for user bookings route
export const UserBookingsWrapper = () => <BookingsList role="user" />;

// Wrapper components for admin bookings route
export const AdminBookingsWrapper = () => <BookingsList role="admin" />;
