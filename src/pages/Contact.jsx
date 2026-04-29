import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Dilip Dance Studio', 'Thamel, Kathmandu', 'Nepal 44600']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+977 123 456 789', '+977 987 654 321']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@dilipdance.com', 'support@dilipdance.com']
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat - Sun: 10:00 AM - 4:00 PM']
    }
  ];

  return (
    <div className="contact">
      <div className="container">
        {/* Hero Section */}
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>
            Get in touch with us for dance lessons, cultural events,
            or inquiries about our traditional attire collection.
          </p>
        </section>

        <div className="contact-content">
          {/* Contact Form */}
          <section className="contact-form-section">
            <div className="form-container">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <Input
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <Input
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
                <div className="form-group">
                  <label className="textarea-label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    className="contact-textarea"
                  />
                </div>
                <Button
                  type="submit"
                  loading={isSubmitting}
                  className="submit-btn"
                >
                  <Send size={16} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </section>

          {/* Contact Info */}
          <section className="contact-info-section">
            <h2>Get in Touch</h2>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-icon">
                    <info.icon size={24} />
                  </div>
                  <h3>{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="map-container">
              <div className="map-placeholder">
                <MapPin size={48} />
                <p>Interactive Map Coming Soon</p>
                <p>Kirtipur, Kathmandu, Nepal</p>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I enroll for dance classes?</h3>
              <p>
                You can enroll by contacting us directly or visiting our studio.
                We offer both in-person and online classes for various skill levels.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you provide traditional dance costumes?</h3>
              <p>
                Yes! We have an extensive collection of authentic Nepali traditional
                attire available for purchase through our online store.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I book you for cultural events?</h3>
              <p>
                Absolutely! We provide professional dance performances for weddings,
                festivals, corporate events, and cultural celebrations.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you offer online dance tutorials?</h3>
              <p>
                Yes, we have comprehensive online courses covering various Nepali
                dance forms with step-by-step video tutorials.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;