import {motion} from 'framer-motion';
import React, {useState} from 'react';

import styles from '../styles/components/projectCard.module.scss';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  gitHub: string;
  hosted: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  gitHub,
  hosted,
  index,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: index * 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: {scale: 1.2, opacity: 0},
    visible: {
      scale: 1,
      opacity: 1,
      transition: {duration: 0.6, ease: 'easeOut'},
    },
  };

  return (
    <motion.div
      className={styles.projectCard}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
      whileHover={{
        y: -10,
        rotateY: 5,
        transition: {duration: 0.3},
      }}
    >
      <div className={styles.imageContainer}>
        <motion.img
          src={image}
          alt={title}
          className={styles.projectImage}
          variants={imageVariants}
          initial="hidden"
          animate={imageLoaded ? 'visible' : 'hidden'}
          onLoad={() => setImageLoaded(true)}
        />
        <div className={styles.imageOverlay}>
          <div className={styles.overlayContent}>
            <motion.a
              href={hosted !== '#' ? hosted : gitHub}
              target="_blank"
              rel="noreferrer"
              className={styles.viewButton}
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 12L9 7V17L15 12Z" fill="currentColor" />
              </svg>
              View Project
            </motion.a>
          </div>
        </div>
        <div className={styles.gradientOverlay} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          {gitHub && gitHub !== '#' && (
            <motion.a
              href={gitHub}
              target="_blank"
              rel="noreferrer"
              className={styles.actionButton}
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C20.565 21.795 24 17.295 24 12C24 5.37 18.63 0 12 0Z"
                  fill="currentColor"
                />
              </svg>
              Code
            </motion.a>
          )}
          {hosted && hosted !== '#' && (
            <motion.a
              href={hosted}
              target="_blank"
              rel="noreferrer"
              className={styles.actionButton}
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11M15 3H21V9M10 14L21 3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Live Demo
            </motion.a>
          )}
        </div>
      </div>

      <motion.div
        className={styles.cardGlow}
        initial={{opacity: 0}}
        whileHover={{opacity: 1}}
        transition={{duration: 0.3}}
      />
    </motion.div>
  );
};

export default ProjectCard;
