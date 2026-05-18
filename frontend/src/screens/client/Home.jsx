import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, MapPin, Clock, Award, Stethoscope, Heart, 
  Users, Calendar, Star, ArrowRight, Shield, 
  Activity, CheckCircle, ChevronRight, Mail, Send
} from 'lucide-react';
import Header from '../../components/Header';

const Home = () => {
  const stats = [
    { value: '15+', label: 'Years Experience', icon: Award },
    { value: '50K+', label: 'Happy Patients', icon: Users },
    { value: '10K+', label: 'Successful Treatments', icon: CheckCircle },
    { value: '24/7', label: 'Emergency Care', icon: Activity },
  ];

  const services = [
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Comprehensive primary care for all ages with advanced diagnostics and preventive medicine.',
      features: ['Health Checkups', 'Chronic Care', 'Preventive Medicine', 'Vaccinations']
    },
    {
      icon: Heart,
      title: 'Homeopathy',
      description: 'Natural, holistic treatments that stimulate your body\'s self-healing mechanisms.',
      features: ['Constitutional Treatment', 'Chronic Conditions', 'Allergy Management', 'Skin Disorders']
    },
    {
      icon: Shield,
      title: 'Women\'s Health',
      description: 'Specialized care for women at every stage of life with compassion and expertise.',
      features: ['Gynecology Care', 'Pregnancy Care', 'Hormonal Balance', 'Wellness Exams']
    },
    {
      icon: Users,
      title: 'Family Healthcare',
      description: 'Complete healthcare solutions for your entire family under one roof.',
      features: ['Pediatric Care', 'Geriatric Care', 'Family Planning', 'Nutrition Advice']
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'CTS no. 12030, Teachers Colony, Khasbag, Belgaum - 590003'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '7411464225',
      link: 'tel:7411464225'
    },
    {
      icon: Clock,
      title: 'Clinic Hours',
      content: 'Morning: 9:00 AM - 1:00 PM | Evening: 6:30 PM - 10:30 PM'
    },
    {
      icon: Calendar,
      title: 'Sunday',
      content: 'OPEN - We care for you 7 days a week',
      badge: true
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      text: 'Dr. Shilpa\'s care during my pregnancy was exceptional. The homeopathic approach made my journey comfortable and natural.',
      rating: 5,
      role: 'Patient since 2019'
    },
    {
      name: 'Rajesh Kumar',
      text: 'Finally found a clinic that treats the root cause, not just symptoms. Dr. Shubham\'s treatment for my chronic migraine changed my life.',
      rating: 5,
      role: 'Patient since 2020'
    },
    {
      name: 'Anita Desai',
      text: 'Best family clinic in Belgaum. Both doctors are incredibly knowledgeable and genuinely care about their patients.',
      rating: 5,
      role: 'Patient since 2018'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <>
      <Header />
      
      <main className="home-page">
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-background">
            <div className="hero-gradient"></div>
            <div className="hero-pattern"></div>
          </div>
          
          <div className="hero-content">
            <div className="container">
              <div className="hero-grid">
                <motion.div 
                  className="hero-text"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <span className="hero-badge">
                    <Award size={16} />
                    Trusted Healthcare Since 2008
                  </span>
                  
                  <h1 className="hero-title">
                    Your Health, 
                    <span className="text-primary"> Our Priority</span>
                  </h1>
                  
                  <p className="hero-description">
                    Experience holistic healthcare that combines modern medicine with traditional homeopathy. 
                    Our expert doctors provide personalized treatment plans for your complete well-being.
                  </p>
                  
                  <div className="hero-actions">
                    <motion.a 
                      href="tel:7411464225" 
                      className="btn btn-primary btn-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone size={20} />
                      Book Appointment
                    </motion.a>
                    
                    <motion.a 
                      href="#services" 
                      className="btn btn-outline btn-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Our Services
                      <ArrowRight size={20} />
                    </motion.a>
                  </div>

                  <div className="hero-stats">
                    {stats.map((stat, index) => (
                      <motion.div 
                        key={index} 
                        className="stat-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <stat.icon size={20} className="stat-icon" />
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  className="hero-image-wrapper"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="hero-image-card">
                    <div className="hero-image-placeholder">
                      <Stethoscope size={64} />
                    </div>
                    <div className="hero-image-info">
                      <div className="info-item">
                        <Clock size={18} />
                        <div>
                          <strong>Open 7 Days</strong>
                          <p>9 AM - 1 PM • 6:30 PM - 10:30 PM</p>
                        </div>
                      </div>
                      <div className="info-item">
                        <MapPin size={18} />
                        <div>
                          <strong>Visit Us</strong>
                          <p>Teachers Colony, Khasbag, Belgaum</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services-section">
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-badge">Our Services</span>
              <h2 className="section-title">Comprehensive Healthcare Solutions</h2>
              <p className="section-description">
                We offer a wide range of medical services tailored to meet your unique health needs
              </p>
            </motion.div>

            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="service-icon">
                    <service.icon size={28} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex}>
                        <CheckCircle size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className="doctors-section">
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-badge">Our Doctors</span>
              <h2 className="section-title">Meet Your Healthcare Partners</h2>
              <p className="section-description">
                Experienced, compassionate doctors dedicated to your well-being
              </p>
            </motion.div>

            <div className="doctors-grid">
              <motion.div 
                className="doctor-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="doctor-image">
                  <img src={require('../../assets/drShubham.webp')} alt="Dr. Shubham Dalavi" />
                </div>
                <div className="doctor-info">
                  <h3>Dr. Shubham Dalavi</h3>
                  <span className="doctor-degree">BHMS</span>
                  <p className="doctor-specialty">General Physician & Homeopathic Consultant</p>
                  <p className="doctor-bio">
                    With extensive experience in treating both acute and chronic conditions, 
                    Dr. Shubham combines modern diagnostics with traditional homeopathic wisdom 
                    for optimal patient outcomes.
                  </p>
                  <div className="doctor-expertise">
                    <h4>Areas of Expertise</h4>
                    <div className="expertise-tags">
                      <span>Chronic Diseases</span>
                      <span>Respiratory Issues</span>
                      <span>Skin Disorders</span>
                      <span>Allergies</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="doctor-card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="doctor-image">
                  <img src={require('../../assets/drShubham.webp')} alt="Dr. Shilpa Poojari" />
                </div>
                <div className="doctor-info">
                  <h3>Dr. Shilpa Poojari</h3>
                  <span className="doctor-degree">BHMS, CGO</span>
                  <p className="doctor-specialty">Women's Health Specialist</p>
                  <p className="doctor-bio">
                    Specializing in gynecology and obstetrics, Dr. Shilpa provides compassionate 
                    care for women at every stage of life, with expertise in pregnancy care and 
                    hormonal wellness.
                  </p>
                  <div className="doctor-expertise">
                    <h4>Areas of Expertise</h4>
                    <div className="expertise-tags">
                      <span>Pregnancy Care</span>
                      <span>Gynecology</span>
                      <span>Hormonal Balance</span>
                      <span>PCOS/PCOD</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-badge">Testimonials</span>
              <h2 className="section-title">What Our Patients Say</h2>
            </motion.div>

            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="testimonial-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="testimonial-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#FBBF24" color="#FBBF24" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-badge">Contact Us</span>
              <h2 className="section-title">Get in Touch</h2>
            </motion.div>

            <div className="contact-grid">
              <motion.div 
                className="contact-info"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="contact-cards">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-card">
                      <div className="contact-icon">
                        <info.icon size={24} />
                      </div>
                      <div className="contact-details">
                        <h4>{info.title}</h4>
                        {info.badge && <div className="sunday-badge">Sunday Open</div>}
                        {info.link ? (
                          <a href={info.link}>{info.content}</a>
                        ) : (
                          <p>{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="contact-form-wrapper"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Enter your name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="Enter your phone number" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message (Optional)</label>
                    <textarea id="message" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="btn-submit">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <motion.div 
              className="cta-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Ready to Prioritize Your Health?</h2>
              <p>Book an appointment today and experience holistic, personalized care from our expert doctors.</p>
              <motion.a 
                href="tel:7411464225" 
                className="btn-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
                Call 7411464225
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <div className="footer-logo">Care & Cure Clinic</div>
                <p>Your trusted healthcare partner for General Medicine and Homeopathic treatments. Providing comprehensive, compassionate care since 2008.</p>
              </div>
              <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#doctors">Our Doctors</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-links">
                <h4>Services</h4>
                <ul>
                  <li><a href="#services">General Medicine</a></li>
                  <li><a href="#services">Homeopathy</a></li>
                  <li><a href="#services">Women's Health</a></li>
                  <li><a href="#services">Family Care</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 Care & Cure Clinic. All rights reserved. | Designed with ❤️ for better healthcare</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;