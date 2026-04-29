import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { culturalElements, regions, values } from '../data/mockData';
import './Culture.css';

const Culture = () => {
  return (
    <div className="culture">
      <div className="container">
        {/* Hero Section */}
        <section className="culture-hero">
          <h1>Nepali Culture & Heritage</h1>
          <p className="hero-description">
            Discover the vibrant tapestry of Nepali traditions, from ancient festivals
            to modern celebrations, that make our culture uniquely beautiful.
          </p>
        </section>

        {/* Cultural Elements */}
        <section className="cultural-elements">
          <h2>Elements of Nepali Culture</h2>
          <div className="elements-grid">
            {culturalElements.map((element, index) => (
              <div key={index} className="element-card">
                <div className="element-image">
                  <img loading="lazy" src={element.image} alt={element.title} />
                </div>
                <div className="element-content">
                  <h3>{element.title}</h3>
                  <p>{element.description}</p>
                  <ul className="highlights-list">
                    {element.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Regional Diversity */}
        <section className="regional-diversity">
          <h2>Cultural Diversity Across Regions</h2>
          <p className="section-description">
            Nepal's diverse geography has given rise to unique cultural traditions
            in different regions, each contributing to our rich national heritage.
          </p>
          <div className="regions-grid">
            {regions.map((region, index) => (
              <div key={index} className="region-card">
                <img loading="lazy" src={region.image} alt={region.name} />
                <div className="region-content">
                  <h3>{region.name}</h3>
                  <p>{region.description}</p>
                  <div className="region-dances">
                    <h4>Signature Dances:</h4>
                    <div className="dance-tags">
                      {region.dances.map((dance, i) => (
                        <span key={i} className="dance-tag">{dance}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="core-values">
          <h2>Core Cultural Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <value.icon size={32} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cultural Preservation */}
        <section className="cultural-preservation">
          <div className="preservation-content">
            <h2>Preserving Our Heritage</h2>
            <p>
              In today's rapidly changing world, preserving our cultural heritage is more
              important than ever. Through dance, music, festivals, and traditional arts,
              we keep alive the wisdom and beauty of our ancestors.
            </p>
            <p>
              At Dilip Dance, we are committed to not just performing these traditions,
              but teaching them to the next generation, ensuring that the soul of Nepali
              culture continues to thrive and inspire.
            </p>
            <div className="preservation-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Dance Forms Preserved</span>
              </div>
              <div className="stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Years of Teaching</span>
              </div>
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Students Reached</span>
              </div>
            </div>
          </div>
          <div className="preservation-image">
            <img loading="lazy" src="/api/placeholder/500/400" alt="Cultural Preservation" />
          </div>
        </section>

        {/* Call to Action */}
        <section className="culture-cta">
          <div className="cta-content">
            <h2>Experience Nepali Culture</h2>
            <p>
              Immerse yourself in the rich traditions of Nepal. Join us in celebrating
              and preserving our cultural heritage through dance and traditional arts.
            </p>
            <div className="cta-actions">
              <Button size="large">
                <Link to="/dance">Explore Dance Forms</Link>
              </Button>
              <Button variant="secondary" size="large">
                <Link to="/contact">Join Our Community</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Culture;