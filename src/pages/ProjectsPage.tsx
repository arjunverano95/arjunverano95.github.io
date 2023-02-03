const Flip = require('react-reveal/Flip');
import {motion} from 'framer-motion';
import React from 'react';

import ProjectCard from '../components/ProjectCard';
import {Projects} from '../data';
import styles from '../styles/pages/projects.module.scss';
import {pageTransition, pageVariants} from '../utils/FramerAnimation';

const projectsOpen = '<projects>';
const projectsClose = '</projects>';

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
                <Flip top key={item.title}>
                  <ProjectCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    gitHub={item.GitHub}
                    hosted={item.hosted}
                  />
                </Flip>
              ) : (
                <Flip bottom key={item.title}>
                  <ProjectCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    gitHub={item.GitHub}
                    hosted={item.hosted}
                  />
                </Flip>
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
