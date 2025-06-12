import {motion} from 'framer-motion';
import React from 'react';

import profilePic from '../assets/profile.svg';
import {About, Links} from '../data';
import styles from '../styles/pages/home.module.scss';

const welcomeText = `I am, ${About.firstName}  ${About.lastName}`;

const zoomVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const HomePage = () => {
  return (
    <div className={styles.home}>
      <motion.div
        variants={zoomVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <img src={profilePic} alt="Profile" className={styles.image} />
        <h2 className={styles.title}>{welcomeText}</h2>
      </motion.div>
      <motion.div
        variants={zoomVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <h3 className={styles.about}>{About.about1}</h3>
        <h3 className={styles.about_next}>{About.about2}</h3>
        <div className={styles.links}>
          {Links.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              key={item.title}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
