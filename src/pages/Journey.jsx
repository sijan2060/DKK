import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { milestones, teachingPhilosophy } from '../data/mockData';
import './Journey.css';

const Journey = () => {
  return (
    <div className="journey">
      <div className="container">
        {/* Hero Section */}
        <section className="journey-hero">
          <h1>Our Journey</h1>
          <p className="hero-description">
            From humble beginnings to becoming Nepal's premier cultural institution,
            discover the story that has shaped Dilip Dance into what it is today.
          </p>
        </section>

        {/* Timeline */}
        <section className="timeline-section">
          <h2>25 Years of Cultural Preservation</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className={`timeline-item ${milestone.type}`}>
                <div className="timeline-content">
                  <div className="timeline-image">
                    <img loading="lazy" src={milestone.image} alt={milestone.title} />
                    <div className="year-badge">{milestone.year}</div>
                  </div>
                  <div className="timeline-text">
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </div>
                {index < milestones.length - 1 && <div className="timeline-connector"></div>}
              </div>
            ))}
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="philosophy-section">
          <h2>Our Teaching Philosophy</h2>
          <p className="philosophy-intro">
            At Dilip Dance, we believe that learning dance is about more than just movements—
            it's about connecting with culture, building community, and personal growth.
          </p>
          <div className="philosophy-grid">
            {teachingPhilosophy.map((item, index) => (
              <div key={index} className="philosophy-card">
                <div className="philosophy-icon">
                  <item.icon size={32} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Stats */}
        <section className="impact-section">
          <h2>Our Impact</h2>
          <div className="impact-stats">
            <div className="stat">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Students Taught</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Dance Forms Preserved</span>
            </div>
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Cultural Events</span>
            </div>
            <div className="stat">
              <span className="stat-number">30+</span>
              <span className="stat-label">Countries Reached</span>
            </div>
          </div>
        </section>

        {/* Vision for Future */}
        <section className="vision-section">
          <div className="vision-content">
            <h2>Looking Ahead</h2>
            <p>
              As we continue our journey, we remain committed to our founding vision:
              to preserve Nepal's dance heritage while making it accessible to the world.
            </p>
            <p>
              Through innovation in education, cultural exchange programs, and community
              engagement, we will ensure that the beauty of Nepali dance continues to
              inspire and unite people across generations and borders.
            </p>
            <div className="vision-goals">
              <div className="goal">
                <h4>2025 Goals</h4>
                <ul>
                  <li>Launch mobile learning app</li>
                  <li>Establish cultural centers in 5 cities</li>
                  <li>Host international dance festival</li>
                </ul>
              </div>
              <div className="goal">
                <h4>2030 Vision</h4>
                <ul>
                  <li>UNESCO World Heritage recognition</li>
                  <li>Global network of 100+ teachers</li>
                  <li>Digital archive of all Nepali dance forms</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="vision-image">
            <img loading="lazy" src="/api/placeholder/500/400" alt="Future Vision" />
          </div>
        </section>

        {/* Call to Action */}
        <section className="journey-cta">
          <div className="cta-content">
            <h2>Join Our Continuing Journey</h2>
            <p>
              Be part of the story. Whether as a student, teacher, or supporter,
              your involvement helps preserve and promote Nepali cultural heritage.
            </p>
            <div className="cta-actions">
              <Button size="large">
                <Link to="/register">Start Learning Today</Link>
              </Button>
              <Button variant="secondary" size="large">
                <Link to="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Journey;