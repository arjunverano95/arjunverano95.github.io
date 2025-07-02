import {motion} from 'framer-motion';
import React from 'react';

import profilePic from '../assets/profile.png';
import {About, Links} from '../data';
import styles from '../styles/pages/home.module.scss';
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {y: 30, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: {scale: 0.8, opacity: 0},
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const linkVariants = {
    hidden: {scale: 0, opacity: 0},
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className={styles.imageContainer}
            variants={imageVariants}
          >
            <div className={styles.imageWrapper}>
              <img
                src={profilePic}
                alt={`${About.firstName} ${About.lastName}`}
                className={styles.profileImage}
              />
              <div className={styles.imageGlow}></div>
            </div>
          </motion.div>

          <motion.div className={styles.textContent} variants={itemVariants}>
            <motion.p className={styles.greeting} variants={itemVariants}>
              Hello, I&#39;m
            </motion.p>
            <motion.h1 className={styles.name} variants={itemVariants}>
              <span className={styles.firstName}>{About.firstName}</span>
              <span className={styles.lastName}>{About.lastName}</span>
            </motion.h1>
            <motion.div className={styles.description} variants={itemVariants}>
              <p className={styles.about1}>{About.about1}</p>
              <p className={styles.about2}>{About.about2}</p>
            </motion.div>
          </motion.div>

          <motion.div className={styles.socialLinks} variants={itemVariants}>
            {Links.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
                variants={linkVariants}
                custom={index}
                whileHover={{
                  scale: 1.1,
                  y: -3,
                }}
                whileTap={{scale: 0.95}}
                title={item.title}
              >
                <span className={styles.socialIcon}>
                  <item.icon />
                </span>
                <span className={styles.socialLabel}>{item.title}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div className={styles.ctaButtons} variants={itemVariants}>
            <motion.button
              className={styles.primaryButton}
              whileHover={{scale: 1.05, y: -2}}
              whileTap={{scale: 0.95}}
              onClick={() => {
                // Add contact navigation or email functionality
                navigate('/contact');
              }}
            >
              <span>Get In Touch</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8H15M15 8L8 1M15 8L8 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
            <motion.button
              className={styles.secondaryButton}
              whileHover={{scale: 1.05, y: -2}}
              whileTap={{scale: 0.95}}
              onClick={() => {
                // Add view work navigation
                navigate('/projects');
              }}
            >
              View My Work
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating Background Elements */}
        <div className={styles.backgroundElements}>
          <motion.div
            className={styles.floatingElement}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className={styles.floatingElement}
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
