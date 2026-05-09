import React, { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTier, setActiveTier] = useState('basic');
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Pricing data
  const pricingTiers = [
    {
      id: 'basic',
      name: 'Basic',
      price: 19,
      description: 'Perfect for individuals and small projects',
      features: [
        '5 Automation Workflows',
        '1,000 Actions per month',
        'Email Support',
        'Basic Analytics'
      ],
      cta: 'Get Started'
    },
    {
      id: 'pro',
      name: 'Professional',
      price: 49,
      description: 'For growing businesses',
      features: [
        '25 Automation Workflows',
        '10,000 Actions per month',
        'Priority Support',
        'Advanced Analytics',
        'API Access',
        'Team Collaboration'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 99,
      description: 'For large organizations',
      features: [
        'Unlimited Workflows',
        '100,000 Actions per month',
        '24/7 Dedicated Support',
        'Custom Integrations',
        'SLA Guarantee',
        'Dedicated Account Manager'
      ],
      cta: 'Contact Sales'
    }
  ];

  // Feature data
  const features = [
    {
      title: 'Workflow Automation',
      description: 'Create complex automation workflows with our intuitive drag-and-drop interface',
      icon: 'fa-robot'
    },
    {
      title: 'Data Integration',
      description: 'Connect all your tools and services for seamless data flow',
      icon: 'fa-database'
    },
    {
      title: 'Real-time Analytics',
      description: 'Monitor performance with detailed dashboards and reports',
      icon: 'fa-chart-line'
    },
    {
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations to optimize your automations',
      icon: 'fa-brain'
    }
  ];

  // Animation on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .pricing-card, .testimonial').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <i className="fas fa-robot"></i>
            <span>AutoBot</span>
          </div>
          
          <div className="nav-menu" style={{ display: isMenuOpen ? 'flex' : 'none' }}>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
            <button className="nav-button">Sign In</button>
          </div>
          
          <div className="nav-toggle" onClick={toggleMenu}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Automate Everything with AI</h1>
          <p className="hero-description">
            Transform your business with our intelligent automation platform. 
            Save time, reduce errors, and boost productivity.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Start Free Trial</button>
            <button className="btn btn-secondary">View Demo</button>
          </div>
        </div>
        
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1667372910377-7c900e139989?w=800" 
            alt="AI-powered automation dashboard showing connected workflow systems"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-header">
          <h2>Powerful Automation Features</h2>
          <p>Everything you need to streamline your business processes</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass-card">
              <div className="feature-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing" id="pricing">
        <div className="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that works best for your automation needs</p>
        </div>
        
        <div className="pricing-grid">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.id} 
              className={`pricing-card glass-card ${tier.popular ? 'popular' : ''}`}
              onClick={() => setActiveTier(tier.id)}
            >
              {tier.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{tier.name}</h3>
              <div className="price">${tier.price}<span>/month</span></div>
              <p className="tier-description">{tier.description}</p>
              <ul className="features-list">
                {tier.features.map((feature, index) => (
                  <li key={index}><i className="fas fa-check"></i> {feature}</li>
                ))}
              </ul>
              <button className={`btn ${tier.popular ? 'btn-primary' : 'btn-secondary'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials" id="testimonials">
        <div className="section-header">
          <h2>Trusted by Industry Leaders</h2>
          <p>See what our customers say about our automation platform</p>
        </div>
        
        <div className="testimonials-grid">
          <div className="testimonial glass-card">
            <div className="testimonial-content">
              <p>"AutoBot reduced our manual work by 80% in just two months. The ROI was immediate."</p>
            </div>
            <div className="testimonial-author">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" 
                alt="Sarah Johnson, Marketing Director"
              />
              <div>
                <strong>Sarah Johnson</strong>
                <p>Marketing Director, TechCorp</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial glass-card">
            <div className="testimonial-content">
              <p>"The workflow automation saved us 20 hours per week. Our team can now focus on strategic work."</p>
            </div>
            <div className="testimonial-author">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f6b7b0?w=100" 
                alt="Michael Chen, Operations Manager"
              />
              <div>
                <strong>Michael Chen</strong>
                <p>Operations Manager, GrowthInc</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial glass-card">
            <div className="testimonial-content">
              <p>"Implementation was seamless. Our data processing time went from days to minutes."</p>
            </div>
            <div className="testimonial-author">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-87fcb0f2e106?w=100" 
                alt="Jennifer Rodriguez, CEO"
              />
              <div>
                <strong>Jennifer Rodriguez</strong>
                <p>CEO, InnovateCo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content glass-card">
          <h2>Ready to Automate Your Business?</h2>
          <p>Join thousands of companies saving time and resources with AutoBot</p>
          <button className="btn btn-primary btn-large">Start Your Free Trial</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <i className="fas fa-robot"></i>
            <span>AutoBot</span>
          </div>
          <div className="footer-links">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Documentation</a>
            <a href="#">Support</a>
          </div>
          <div className="footer-social">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 AutoBot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;