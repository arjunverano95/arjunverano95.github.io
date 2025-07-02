import {motion} from 'framer-motion';
import React from 'react';

import {Skills} from '../data';
import styles from '../styles/pages/skills.module.scss';
import {pageTransition, pageVariants} from '../utils/FramerAnimation';

const SkillsPage = () => {
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const skillCardVariants = {
    hidden: {y: 30, opacity: 0, scale: 0.9},
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const titleVariants = {
    hidden: {y: -30, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className={styles.skills}>
      <motion.div
        className={styles.container}
        initial="init"
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={pageTransition}
      >
        <motion.div className={styles.header} variants={titleVariants}>
          <span className={styles.tagOpen}>&lt;skills&gt;</span>
          <h1 className={styles.title}>
            Technical <span className={styles.titleAccent}>Expertise</span>
          </h1>
          <p className={styles.subtitle}>
            Technologies and tools I work with to bring ideas to life
          </p>
          <span className={styles.tagClose}>&lt;/skills&gt;</span>
        </motion.div>

        <motion.div
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
        >
          {Skills.map((skill, index) => (
            <motion.a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noreferrer"
              className={styles.skillCard}
              variants={skillCardVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
                rotateY: 5,
              }}
              whileTap={{scale: 0.95}}
              custom={index}
            >
              <motion.div
                className={styles.skillIcon}
                whileHover={{rotate: [0, -10, 10, 0]}}
                transition={{duration: 0.5}}
              >
                <skill.icon />
              </motion.div>
              <span className={styles.skillName}>{skill.name}</span>
              <motion.div
                className={styles.skillGlow}
                initial={{opacity: 0}}
                whileHover={{opacity: 1}}
                transition={{duration: 0.3}}
              />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className={styles.stats}
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.3}}
        >
          <div className={styles.stat}>
            <span className={styles.statNumber}>10+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>20+</span>
            <span className={styles.statLabel}>Technologies</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Projects Completed</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillsPage;
