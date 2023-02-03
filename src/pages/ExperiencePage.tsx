import {motion} from 'framer-motion';
import React from 'react';

import ExperienceCard from '../components/ExperienceCard';
import {Experience} from '../data';
import styles from '../styles/pages/experience.module.scss';
import {pageTransition, pageVariants} from '../utils/FramerAnimation';

const eduOpen = '<experience>';
const eduClose = '</experience>';

const ExperiencePage = () => {
  return (
    <div className={styles.experience}>
      <motion.div
        initial="init"
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.eduOpen}>{eduOpen}</h3>
          <div className={styles.center_line}></div>
          {Experience.map((item, index) => (
            <ExperienceCard
              key={`${item.title}-${index}`}
              title={item.title}
              subtitle={item.subtitle}
              website={item.website}
              date={item.date}
              content={item.content}
              isLeft={index % 2 === 0 ? true : false}
            />
          ))}
          <h3 className={styles.eduClose}>{eduClose}</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperiencePage;
