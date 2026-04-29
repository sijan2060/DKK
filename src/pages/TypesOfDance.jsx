import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, Play, Info } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { danceTypes, danceTypesCategories as categories } from '../data/mockData';
import './TypesOfDance.css';

const TypesOfDance = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'all'
  );

  const filteredDances = useMemo(() => {
    let filtered = [...danceTypes];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(dance => dance.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(dance =>
        dance.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dance.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dance.region.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  // `danceTypes` is a static module-level constant — not a reactive dep
  }, [selectedCategory, searchTerm]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setSearchParams(categoryId !== 'all' ? { category: categoryId } : {});
  };

  return (
    <div className="types-of-dance">
      <div className="container">
        {/* Header */}
        <section className="types-header">
          <h1>Types of Nepali Dance</h1>
          <p>
            Explore the diverse collection of traditional Nepali dance forms,
            each with its unique cultural significance and regional characteristics.
          </p>
        </section>

        {/* Filters and Search */}
        <section className="filters-section">
          <div className="search-bar">
            <Input
              type="text"
              placeholder="Search dance forms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <Search size={20} className="search-icon" />
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </section>

        {/* Dance Grid */}
        <section className="dance-grid-section">
          <div className="dance-grid">
            {filteredDances.map((dance) => (
              <div key={dance.id} className="dance-card">
                <div className="dance-image">
                  <img loading="lazy" src={dance.image} alt={dance.name} />
                  <div className="dance-overlay">
                    <button className="play-btn">
                      <Play size={24} />
                    </button>
                  </div>
                </div>

                <div className="dance-content">
                  <div className="dance-header">
                    <h3>{dance.name}</h3>
                    <span className={`difficulty-badge ${dance.difficulty.toLowerCase()}`}>
                      {dance.difficulty}
                    </span>
                  </div>

                  <p className="dance-description">{dance.description}</p>

                  <div className="dance-details">
                    <div className="detail-item">
                      <span className="label">Region:</span>
                      <span className="value">{dance.region}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Duration:</span>
                      <span className="value">{dance.duration}</span>
                    </div>
                  </div>

                  <div className="dance-significance">
                    <Info size={16} />
                    <span>{dance.culturalSignificance}</span>
                  </div>

                  <div className="dance-actions">
                    <Button variant="secondary" size="small">
                      <Link to={`/dance/${dance.id}`}>
                        Learn More
                      </Link>
                    </Button>
                    <Button size="small">
                      <Play size={16} />
                      Watch Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDances.length === 0 && (
            <div className="no-results">
              <h3>No dance forms found</h3>
              <p>Try adjusting your search or filter criteria.</p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSearchParams({});
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </section>

        {/* Call to Action */}
        <section className="types-cta">
          <div className="cta-content">
            <h2>Want to Learn These Dances?</h2>
            <p>
              Join our comprehensive dance education program and master
              the art of traditional Nepali dance under expert guidance.
            </p>
            <div className="cta-actions">
              <Button size="large">
                <Link to="/contact">Enroll Now</Link>
              </Button>
              <Button variant="secondary" size="large">
                <Link to="/journey">Our Teaching Method</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TypesOfDance;