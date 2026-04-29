import { useState, useMemo } from 'react';

import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { products, productCategories as categories, sortOptions } from '../data/mockData';
import './Dress.css';

const Dress = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  // `products` is a static module-level constant — not a reactive dep
  }, [selectedCategory, searchTerm, priceRange, sortBy]);

  return (
    <div className="dress">
      <div className="container">
        {/* Header */}
        <section className="dress-header">
          <h1>Traditional Dance Attire</h1>
          <p>
            Discover our curated collection of authentic Nepali traditional dresses,
            crafted with cultural authenticity and modern comfort.
          </p>
        </section>

        {/* Filters and Search */}
        <section className="filters-section">
          <div className="search-and-sort">
            <div className="search-bar">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <Search size={20} className="search-icon" />
            </div>

            <div className="sort-and-filter">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <Button
                variant="secondary"
                onClick={() => setShowFilters(!showFilters)}
                className="filter-toggle"
              >
                <SlidersHorizontal size={16} />
                Filters
              </Button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="advanced-filters">
              <div className="filter-group">
                <label>Price Range</label>
                <div className="price-range">
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    step="1000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  />
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  />
                  <div className="price-display">
                    Rs. {priceRange[0].toLocaleString()} - Rs. {priceRange[1].toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Products Grid */}
        <section className="products-section">
          <div className="products-header">
            <h2>
              {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
              <span className="product-count">({filteredProducts.length} items)</span>
            </h2>
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products">
              <h3>No products found</h3>
              <p>Try adjusting your search or filter criteria.</p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setPriceRange([0, 50000]);
                setSortBy('featured');
              }}>
                Clear All Filters
              </Button>
            </div>
          )}
        </section>

        {/* Product Care Info */}
        <section className="product-care">
          <h2>Care Instructions</h2>
          <div className="care-grid">
            <div className="care-item">
              <h3>Traditional Attire Care</h3>
              <ul>
                <li>Dry clean recommended for embroidered pieces</li>
                <li>Store in cool, dry place away from direct sunlight</li>
                <li>Use mild detergent for hand washing</li>
                <li>Air dry flat to prevent stretching</li>
              </ul>
            </div>
            <div className="care-item">
              <h3>Size & Fit Guide</h3>
              <ul>
                <li>Traditional measurements may differ from Western sizes</li>
                <li>Allow 2-3 inches extra for comfort in dance movements</li>
                <li>Custom sizing available for special orders</li>
                <li>Professional alterations recommended</li>
              </ul>
            </div>
            <div className="care-item">
              <h3>Authenticity Guarantee</h3>
              <ul>
                <li>All garments use traditional materials and techniques</li>
                <li>Handcrafted by skilled artisans</li>
                <li>Cultural accuracy verified by dance experts</li>
                <li>Certificate of authenticity included</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dress;