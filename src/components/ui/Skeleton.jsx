import './Skeleton.css';

export const Skeleton = ({ className = '', style = {} }) => {
  return <div className={`skeleton ${className}`} style={style} />;
};

export const SkeletonText = ({ lines = 3, className = '' }) => {
  return (
    <div className={`skeleton-text-container ${className}`}>
      {[...Array(lines)].map((_, i) => (
        <Skeleton 
          key={i} 
          className="skeleton-text" 
          style={{ width: i === lines - 1 && lines > 1 ? '60%' : '100%' }} 
        />
      ))}
    </div>
  );
};

export const SkeletonCard = ({ className = '' }) => {
  return (
    <div className={`skeleton-card card ${className}`}>
      <Skeleton className="skeleton-image" />
      <div className="skeleton-card-content">
        <SkeletonText lines={1} className="mb-2" style={{ height: '1.5rem', width: '80%' }} />
        <SkeletonText lines={2} className="mb-4" />
        <div className="skeleton-card-footer">
          <Skeleton className="skeleton-price" />
          <Skeleton className="skeleton-button" />
        </div>
      </div>
    </div>
  );
};

export const SkeletonPage = () => {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem', minHeight: '100vh' }}>
      <SkeletonText lines={1} style={{ height: '3rem', width: '40%', margin: '0 auto 2rem' }} />
      <SkeletonText lines={2} style={{ margin: '0 auto 4rem', textAlign: 'center', width: '60%' }} />
      <div className="grid grid-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
};
