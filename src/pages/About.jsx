import { Users, Target, Heart, Award } from 'lucide-react';
import { stats, team } from '../data/mockData';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1>About Dilip Dance</h1>
          <p className="about-subtitle">
            Preserving and promoting Nepal's rich dance heritage through education,
            performance, and cultural celebration.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mission-section animate-fade-in-up animate-stagger-1">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              At Dilip Dance, we believe that dance is not just movement, but a living expression
              of Nepal's cultural soul. Our mission is to preserve traditional dance forms,
              educate the next generation, and share the beauty of Nepali culture with the world.
            </p>
            <p>
              Through authentic performances, comprehensive education, and carefully crafted
              traditional attire, we bridge the gap between ancient traditions and modern appreciation.
            </p>
          </div>
          <div className="mission-image">
            <img loading="lazy" src="/api/placeholder/600/400" alt="Cultural Performance" />
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section animate-fade-in-up animate-stagger-2">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <stat.icon size={32} />
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section animate-fade-in-up animate-stagger-3">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Heart size={24} />
              </div>
              <h3>Authenticity</h3>
              <p>
                We maintain the purity and authenticity of traditional dance forms
                while making them accessible to modern audiences.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Users size={24} />
              </div>
              <h3>Community</h3>
              <p>
                Building a vibrant community of dancers, learners, and cultural
                enthusiasts who share our passion for Nepali heritage.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Award size={24} />
              </div>
              <h3>Excellence</h3>
              <p>
                Striving for excellence in every performance, every lesson,
                and every piece of traditional attire we create.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section animate-fade-in-up animate-stagger-4">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <img loading="lazy" src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Founded in 1999 by master dancer Rajesh Sharma, Dilip Dance began as a small
              studio in Kathmandu dedicated to preserving the ancient art of Nepali classical dance.
              What started as a passion project has grown into Nepal's premier cultural institution.
            </p>
            <p>
              Over the years, we've expanded our reach to include online education, international
              performances, and a curated collection of traditional attire. Today, we serve students
              from over 30 countries, sharing the beauty of Nepali dance culture worldwide.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;