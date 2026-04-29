import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { danceCategories, features } from '../data/mockData';
import './Dance.css';

const Dance = () => {
  return (
    <div className="dance">
      <div className="container">
        {/* Hero Section */}
        <section className="dance-hero">
          <div className="hero-content">
            <h1>The Art of Nepali Dance</h1>
            <p className="hero-description">
              Discover the rhythmic soul of Nepal through our comprehensive collection
              of traditional dance forms, each telling a unique story of our cultural heritage.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Dance Forms</span>
              </div>
              <div className="stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Years Teaching</span>
              </div>
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Students</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img loading="lazy" src="/api/placeholder/600/400" alt="Nepali Dance Performance" />
          </div>
        </section>

        {/* Dance Categories */}
        <section className="dance-categories animate-fade-in-up animate-stagger-1">
          <h2>Dance Categories</h2>
          <div className="categories-grid">
            {danceCategories.map((category) => (
              <div key={category.id} className="category-card">
                <div className="category-image">
                  <img loading="lazy" src={category.image} alt={category.title} />
                </div>
                <div className="category-content">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <div className="category-details">
                    <span className="difficulty">{category.difficulty}</span>
                    <span className="duration">{category.duration}</span>
                  </div>
                  <div className="dance-forms">
                    <h4>Popular Forms:</h4>
                    <ul>
                      {category.forms.map((form, index) => (
                        <li key={index}>{form}</li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="secondary">
                    <Link to={`/types?category=${category.id}`}>
                      Explore {category.title}
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="dance-features animate-fade-in-up animate-stagger-2">
          <h2>Why Learn With Us?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <feature.icon size={32} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="dance-cta animate-fade-in-up animate-stagger-3">
          <div className="cta-content">
            <h2>Ready to Start Your Dance Journey?</h2>
            <p>
              Join our community of dancers and cultural enthusiasts.
              Whether you're a beginner or experienced performer, we have the perfect program for you.
            </p>
            <div className="cta-actions">
              <Button size="large">
                <Link to="/types">Browse All Dance Forms</Link>
              </Button>
              <Button variant="secondary" size="large">
                <Link to="/contact">Book a Trial Class</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Cultural Significance */}
        <section className="cultural-significance">
          <div className="significance-content">
            <h2>The Cultural Significance of Nepali Dance</h2>
            <p>
              Nepali dance is more than just movement—it's a living expression of our history,
              spirituality, and social values. Each dance form carries stories of our ancestors,
              celebrates our festivals, and preserves our unique identity.
            </p>
            <p>
              From the majestic Lakhey dance that wards off evil spirits to the joyful Maruni
              dance that celebrates harvest festivals, every performance connects us to our roots
              and keeps our traditions alive for future generations.
            </p>
            <Button>
              <Link to="/culture">Learn About Our Culture</Link>
            </Button>
          </div>
          <div className="significance-image">
            <img loading="lazy" src="/api/placeholder/500/400" alt="Cultural Dance Performance" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dance;