import {motion} from 'framer-motion';
import React from 'react';

import ProjectCard from '../components/ProjectCard';
import {Projects} from '../data';
import styles from '../styles/pages/projects.module.scss';
import {pageTransition, pageVariants} from '../utils/FramerAnimation';

const ProjectsPage = () => {
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
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

  const projectVariants = {
    hidden: {y: 50, opacity: 0, scale: 0.9},
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className={styles.projects}>
      <motion.div
        className={styles.container}
        initial="init"
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={pageTransition}
      >
        <motion.div className={styles.header} variants={titleVariants}>
          <span className={styles.tagOpen}>&lt;projects&gt;</span>
          <h1 className={styles.title}>
            Featured <span className={styles.titleAccent}>Projects</span>
          </h1>
          <p className={styles.subtitle}>
            A showcase of my recent work and personal projects that demonstrate
            my skills and passion for development
          </p>
          <span className={styles.tagClose}>&lt;/projects&gt;</span>
        </motion.div>

        <motion.div
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
        >
          {Projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className={styles.projectWrapper}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                gitHub={project.GitHub}
                hosted={project.hosted}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.callToAction}
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.3}}
        >
          <h3 className={styles.ctaTitle}>Interested in working together?</h3>
          <p className={styles.ctaDescription}>
            I&apos;m always open to discussing new opportunities and exciting
            projects.
          </p>
          <motion.a
            href="#contact"
            className={styles.ctaButton}
            whileHover={{scale: 1.05, y: -2}}
            whileTap={{scale: 0.95}}
          >
            <span>Let's Connect</span>
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
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
