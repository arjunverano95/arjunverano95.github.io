import {motion} from 'framer-motion';
import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import {NavLinks} from '../data';
import styles from '../styles/components/navbar.module.scss';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (link: string) => {
    navigate(link);
    setIsMobileMenuOpen(false);
  };

  const navVariants = {
    hidden: {y: -100, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {y: -20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.4, ease: 'easeOut'},
    },
  };

  return (
    <motion.nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.container}>
        <motion.div
          className={styles.logo}
          variants={itemVariants}
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95}}
          onClick={() => navigate('/')}
        >
          <span className={styles.logoText}>
            &lt;<span className={styles.logoAccent}>Arjun</span>/&gt;
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div className={styles.desktopNav} variants={itemVariants}>
          {NavLinks.map((navItem) => (
            <motion.button
              key={navItem.link}
              className={`${styles.navItem} ${
                location.pathname === navItem.link ? styles.active : ''
              }`}
              onClick={() => handleNavigation(navItem.link)}
              whileHover={{y: -2}}
              whileTap={{y: 0}}
            >
              <span className={styles.navIcon}>
                <navItem.icon />
              </span>
              <span className={styles.navText}>{navItem.title}</span>
              {location.pathname === navItem.link && (
                <motion.div
                  className={styles.activeIndicator}
                  layoutId="activeIndicator"
                  initial={false}
                  transition={{duration: 0.3, ease: 'easeInOut'}}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className={styles.mobileMenuButton}
          variants={itemVariants}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{scale: 0.95}}
        >
          <span
            className={`${styles.hamburger} ${
              isMobileMenuOpen ? styles.open : ''
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </motion.button>

        {/* Mobile Navigation */}
        <motion.div
          className={`${styles.mobileNav} ${
            isMobileMenuOpen ? styles.open : ''
          }`}
          initial={false}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            y: isMobileMenuOpen ? 0 : -20,
            scale: isMobileMenuOpen ? 1 : 0.95,
          }}
          transition={{duration: 0.3, ease: 'easeInOut'}}
        >
          {NavLinks.map((navItem, index) => (
            <motion.button
              key={navItem.link}
              className={`${styles.mobileNavItem} ${
                location.pathname === navItem.link ? styles.active : ''
              }`}
              onClick={() => handleNavigation(navItem.link)}
              initial={{opacity: 0, x: -30}}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -30,
              }}
              transition={{
                duration: 0.3,
                delay: isMobileMenuOpen ? index * 0.1 : 0,
                ease: 'easeOut',
              }}
              whileTap={{scale: 0.95}}
            >
              <span className={styles.navIcon}>
                <navItem.icon />
              </span>
              <span className={styles.navText}>{navItem.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
