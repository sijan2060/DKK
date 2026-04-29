import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import { ArrowRight, Play, Star, ShoppingBag, Music, Users, Sparkles } from 'lucide-react';
import { featuredProducts } from '../data/mockData';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide for hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-text animate-fade-in-up">
              <h1 className="hero-title">
                Experience the <span className="highlight">Soul</span><br /> of Nepali Dance
              </h1>
              <p className="hero-subtitle">
                Immerse yourself in a dynamic journey of rhythmic traditions, authentic attire, and the deep cultural heritage of Nepal in a modern, immersive platform.
              </p>
              <div className="hero-actions">
                <Button size="large" className="glow-red">
                  <Link to="/dance" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    Start Exploring
                    <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button variant="secondary" size="large">
                  <Play size={20} />
                  Watch Video
                </Button>
              </div>
            </div>
            <div className="hero-visual animate-slide-in-right animate-stagger-2">
              <div className="hero-image-slider">
                <div
                  className="hero-slides"
                  style={{ transform: `translateX(-${currentSlide * 33.333333}%)` }}
                >
                  <div className="hero-slide">
                    <img loading="lazy" src="/img/Lakhe.jpg" alt="lakhe" />
                  </div>
                  <div className="hero-slide">
                    <img loading="lazy" src="/img/Newa.jpg" alt="newa" />
                  </div>
                  <div className="hero-slide">
                    <img loading="lazy" src="/img/Tamang.jpg" alt="tamang" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="bento-section">
        <div className="container">
          <div className="bento-header animate-fade-in-up">
            <h2>Cultural Ecosystem</h2>
            <p>Everything you need to dive deep into our heritage</p>
          </div>
          
          <div className="bento-grid">
            <Link to="/culture" className="bento-item animate-fade-in-up animate-stagger-1">
              <div className="bento-icon">
                <Star />
              </div>
              <div className="bento-content">
                <h3>Rich Heritage</h3>
                <p>Explore over 100 traditional dance forms passed down through centuries. Unearth the profound histories and cultural narratives behind every movement.</p>
              </div>
              <ArrowRight className="bento-arrow" size={24} />
            </Link>

            <Link to="/journey" className="bento-item animate-fade-in-up animate-stagger-2">
              <div className="bento-icon">
                <Users />
              </div>
              <div className="bento-content">
                <h3>Our Journey</h3>
                <p>Join a thriving community of performers and enthusiasts.</p>
              </div>
              <ArrowRight className="bento-arrow" size={24} />
            </Link>

            <Link to="/dress" className="bento-item animate-fade-in-up animate-stagger-3">
              <div className="bento-icon" style={{color: '#FF2A55'}}>
                <ShoppingBag />
              </div>
              <div className="bento-content">
                <h3>Authentic Attire</h3>
                <p>Shop premium quality traditional dresses crafted with authenticity.</p>
              </div>
              <ArrowRight className="bento-arrow" size={24} />
            </Link>

            <Link to="/dance" className="bento-item animate-fade-in-up animate-stagger-4">
              <div className="bento-icon" style={{color: '#D4AF37'}}>
                <Music />
              </div>
              <div className="bento-content">
                <h3>Rhythm & Motion</h3>
                <p>Dive deep into intricate steps, regional styles, and the heart-pounding music that drives Nepali festivals. From the fierce Lakhe to the elegant Maruni.</p>
              </div>
              <ArrowRight className="bento-arrow" size={24} />
            </Link>

            <Link to="/types" className="bento-item animate-fade-in-up animate-stagger-1">
              <div className="bento-icon">
                <Sparkles />
              </div>
              <div className="bento-content">
                <h3>Masterclasses</h3>
                <p>Learn authentic choreography from legendary masters.</p>
              </div>
              <ArrowRight className="bento-arrow" size={24} />
            </Link>

            <Link to="/register" className="bento-item span-full animate-fade-in-up animate-stagger-2 glow-red">
              <div className="bento-content" style={{marginTop: 0}}>
                <h3 style={{fontSize: '2rem', marginBottom: '0.5rem'}}>Join the Movement</h3>
                <p style={{fontSize: '1.2rem', maxWidth: '600px'}}>Sign up today to book classes, purchase authentic attire, and become an integral part of Nepal's cultural preservation.</p>
              </div>
              <div className="bento-action" style={{paddingRight: '2rem'}}>
                <span style={{fontSize: '1.25rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  Get Started <ArrowRight size={24} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="bento-header">
            <h2>Featured Collection</h2>
            <p>Elevate your performance with our handcrafted traditional wear</p>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-actions" style={{marginTop: '4rem'}}>
            <Button size="large">
              <Link to="/dress" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                View Full Catalog
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;