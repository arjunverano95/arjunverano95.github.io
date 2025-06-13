import {motion} from 'framer-motion';
import React from 'react';

import ExperienceCard from '../components/ExperienceCard';
import {Experience} from '../data';
import styles from '../styles/pages/experience.module.scss';
import {pageTransition, pageVariants} from '../utils/FramerAnimation';

const ExperiencePage = () => {
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

  const timelineVariants = {
    hidden: {scaleY: 0},
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
  };

  return (
    <div className={styles.experience}>
      <motion.div
        className={styles.container}
        initial="init"
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={pageTransition}
      >
        <motion.div className={styles.header} variants={titleVariants}>
          <span className={styles.tagOpen}>&lt;experience&gt;</span>
          <h1 className={styles.title}>
            Professional <span className={styles.titleAccent}>Journey</span>
          </h1>
          <p className={styles.subtitle}>
            My career progression and the exciting projects I&#39;ve worked on
            throughout my professional journey
          </p>
          <span className={styles.tagClose}>&lt;/experience&gt;</span>
        </motion.div>

        <motion.div
          className={styles.timelineContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
        >
          <motion.div className={styles.timeline} variants={timelineVariants} />

          <div className={styles.experienceList}>
            {Experience.map((experience, index) => (
              <ExperienceCard
                key={`${experience.title}-${experience.subtitle}`}
                experience={experience}
                index={index}
                isLast={index === Experience.length - 1}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.summary}
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.3}}
        >
          <div className={styles.summaryGrid}>
            <div className={styles.summaryItem}>
              <span className={styles.summaryNumber}>8+</span>
              <span className={styles.summaryLabel}>Years Experience</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryNumber}>{Experience.length}</span>
              <span className={styles.summaryLabel}>Companies</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryNumber}>100+</span>
              <span className={styles.summaryLabel}>Projects Delivered</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryNumber}>15+</span>
              <span className={styles.summaryLabel}>Technologies</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExperiencePage;
