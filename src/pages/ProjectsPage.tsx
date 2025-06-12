import {motion} from 'framer-motion';
import React from 'react';

import ProjectCard from '../components/ProjectCard';
import {Projects} from '../data';
import styles from '../styles/pages/projects.module.scss';
import {pageTransition, pageVariants} from '../utils/FramerAnimation';

const projectsOpen = '<projects>';
const projectsClose = '</projects>';

const flipVariants = {
  hidden: (direction: 'top' | 'bottom') => ({
    opacity: 0,
    rotateX: direction === 'top' ? -90 : 90,
    y: direction === 'top' ? -50 : 50,
  }),
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const ProjectsPage = () => {
  return (
    <div className={styles.projects}>
      <motion.div
        initial="init"
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.projectsOpen}>{projectsOpen}</h3>

          <div className={styles.projects_content}>
            {Projects.map((item, index) =>
              index % 2 === 0 ? (
                <motion.div
                  key={item.title}
                  variants={flipVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true, amount: 0.3}}
                  custom="top"
                >
                  <ProjectCard
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    gitHub={item.GitHub}
                    hosted={item.hosted}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key={item.title}
                  variants={flipVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true, amount: 0.3}}
                  custom="bottom"
                >
                  <ProjectCard
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    gitHub={item.GitHub}
                    hosted={item.hosted}
                  />
                </motion.div>
              ),
            )}
          </div>

          <h3 className={styles.projectsClose}>{projectsClose}</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
