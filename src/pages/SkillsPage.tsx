import {motion} from 'framer-motion';
import React from 'react';

import {Skills} from '../data';
import styles from '../styles/pages/skills.module.scss';
import {pageTransition, pageVariants} from '../utils/FramerAnimation';

const skillsOpen = '<skills>';
const skillsClose = '</skills>';

const SkillsPage = () => {
  return (
    <div className={styles.skills}>
      <motion.div
        initial="init"
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.skillsopen}>{skillsOpen}</h3>
          <div className={styles.skills_content}>
            {Skills.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <h3 className={styles.skillsclose}>{skillsClose}</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsPage;
