import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --clinic-teal:    #0a7c6e;
          --clinic-teal-lt: #e6f4f2;
          --clinic-cream:   #faf8f5;
          --clinic-charcoal:#1c2b2a;
          --clinic-muted:   #6b8582;
          --clinic-accent:  #c8e6e2;
          --header-h:       72px;
        }

        body { padding-top: var(--header-h); }

        .cc-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          height: var(--header-h);
          font-family: 'DM Sans', sans-serif;
          transition: background 0.35s ease, box-shadow 0.35s ease;
          background: rgba(250, 248, 245, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid transparent;
        }

        .cc-header.scrolled {
          background: rgba(250, 248, 245, 0.97);
          box-shadow: 0 2px 24px rgba(10, 124, 110, 0.08);
          border-bottom-color: var(--clinic-accent);
        }

        /* Brand */
        .cc-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none !important;
        }

        .cc-brand-icon {
          width: 38px; height: 38px;
          background: var(--clinic-teal);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .cc-brand-icon svg { width: 20px; height: 20px; }

        .cc-brand-name {
          font-family: 'DM Serif Display', serif;
          font-size: 1.25rem;
          color: var(--clinic-charcoal);
          line-height: 1.1;
          letter-spacing: -0.01em;
        }

        .cc-brand-tagline {
          font-size: 0.65rem;
          color: var(--clinic-muted);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 500;
          line-height: 1;
        }

        /* Nav links */
        .cc-nav-link {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--clinic-charcoal) !important;
          letter-spacing: 0.01em;
          padding: 0.35rem 0.75rem !important;
          border-radius: 6px;
          position: relative;
          transition: color 0.2s, background 0.2s;
        }

        .cc-nav-link::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 16px; height: 2px;
          background: var(--clinic-teal);
          border-radius: 2px;
          transition: transform 0.25s ease;
        }

        .cc-nav-link:hover { color: var(--clinic-teal) !important; background: var(--clinic-teal-lt); }
        .cc-nav-link:hover::after { transform: translateX(-50%) scaleX(1); }

        /* CTA button */
        .cc-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          padding: 0.5rem 1.25rem;
          border-radius: 8px;
          background: var(--clinic-teal);
          border: none;
          color: #fff;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          white-space: nowrap;
        }

        .cc-cta:hover {
          background: var(--clinic-charcoal);
          box-shadow: 0 4px 16px rgba(10, 124, 110, 0.25);
          transform: translateY(-1px);
          color: #fff;
        }

        .cc-cta:active { transform: translateY(0); }

        /* Pulse dot */
        .cc-pulse {
          display: inline-block;
          width: 7px; height: 7px;
          background: #4CAF50;
          border-radius: 50%;
          margin-right: 6px;
          position: relative;
        }

        .cc-pulse::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: rgba(76, 175, 80, 0.3);
          animation: pulse-ring 1.8s ease-out infinite;
        }

        @keyframes pulse-ring {
          0%   { transform: scale(0.7); opacity: 1; }
          100% { transform: scale(1.9); opacity: 0; }
        }

        /* Mobile toggler */
        .cc-toggler {
          border: none;
          background: var(--clinic-teal-lt);
          border-radius: 8px;
          padding: 6px 10px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          cursor: pointer;
        }

        .cc-toggler span {
          display: block;
          width: 20px; height: 2px;
          background: var(--clinic-teal);
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s, width 0.3s;
          transform-origin: center;
        }

        .cc-toggler.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .cc-toggler.open span:nth-child(2) { opacity: 0; width: 0; }
        .cc-toggler.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

        /* Mobile collapse */
        .cc-mobile-menu {
          position: fixed;
          top: var(--header-h);
          left: 0; right: 0;
          background: var(--clinic-cream);
          border-bottom: 1px solid var(--clinic-accent);
          padding: 1rem 1.5rem 1.5rem;
          box-shadow: 0 8px 32px rgba(10, 124, 110, 0.1);
          overflow: hidden;
        }

        .cc-mobile-link {
          display: block;
          padding: 0.65rem 0.75rem;
          color: var(--clinic-charcoal) !important;
          font-weight: 500;
          border-radius: 8px;
          font-size: 0.95rem;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }

        .cc-mobile-link:hover { background: var(--clinic-teal-lt); color: var(--clinic-teal) !important; }

        .cc-divider {
          height: 1px;
          background: var(--clinic-accent);
          margin: 0.75rem 0;
        }

        @media (min-width: 992px) {
          .cc-toggler { display: none; }
        }
      `}</style>

      <motion.header
        className={`cc-header ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Container className="h-100 d-flex align-items-center justify-content-between">

          {/* Brand */}
          <motion.a
            href="/"
            className="cc-brand"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="cc-brand-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L12 8M8 5h8M8 13h2v4h4v-4h2M3 9h18v12a1 1 0 01-1 1H4a1 1 0 01-1-1V9z" />
              </svg>
            </div>
            <div>
              <div className="cc-brand-name">Care&nbsp;Cure</div>
              <div className="cc-brand-tagline">Clinic</div>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="d-none d-lg-flex align-items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="cc-nav-link"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Right side */}
          <div className="d-flex align-items-center gap-3">
            {/* Open indicator */}
            <motion.div
              className="d-none d-md-flex align-items-center"
              style={{ fontSize: '0.75rem', color: 'var(--clinic-muted)', fontWeight: 500 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="cc-pulse" />
              Open Today 8AM – 4PM
            </motion.div>

            {/* Book CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.35 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <button className="cc-cta" onClick={() => window.location.href = '#booking'}>
                Book Appointment
              </button>
            </motion.div>

            {/* Hamburger (mobile) */}
            <button
              className={`cc-toggler d-lg-none ${expanded ? 'open' : ''}`}
              onClick={() => setExpanded(!expanded)}
              aria-label="Toggle navigation"
            >
              <span /><span /><span />
            </button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="cc-mobile-menu d-lg-none"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="cc-mobile-link"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setExpanded(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <div className="cc-divider" />
            <div className="d-flex align-items-center mb-2" style={{ fontSize: '0.78rem', color: 'var(--clinic-muted)', fontWeight: 500 }}>
              <span className="cc-pulse" /> Open Today 8AM – 4PM
            </div>
            <button className="cc-cta w-100" onClick={() => { setExpanded(false); window.location.href = '#booking'; }}>
              Book Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;