import {motion} from 'framer-motion';
import React, {useState} from 'react';

import {ExperienceType} from '../data/Experience';
import styles from '../styles/components/experienceCard.module.scss';

interface ExperienceCardProps {
  experience: ExperienceType;
  index: number;
  isLast: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index,
  isLast,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      y: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: index * 0.1,
      },
    },
  };

  const dotVariants = {
    hidden: {scale: 0, opacity: 0},
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.1 + 0.3,
      },
    },
  };

  const contentVariants = {
    collapsed: {height: 0, opacity: 0},
    expanded: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className={`${styles.experienceCard} ${
        index % 2 === 0 ? styles.left : styles.right
      }`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
    >
      <motion.div
        className={styles.timelineDot}
        variants={dotVariants}
        whileHover={{scale: 1.2}}
      >
        <div className={styles.dotInner} />
      </motion.div>

      <motion.div
        className={styles.card}
        whileHover={{
          y: -5,
          scale: 1.02,
        }}
        transition={{duration: 0.3}}
      >
        <div className={styles.cardHeader}>
          <div className={styles.headerContent}>
            <h3 className={styles.title}>{experience.title}</h3>
            <div className={styles.company}>
              {experience.website ? (
                <a
                  href={experience.website}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.companyLink}
                >
                  {experience.subtitle}
                  <svg
                    width="12"
                    height="12"
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
                </a>
              ) : (
                <span className={styles.companyText}>
                  {experience.subtitle}
                </span>
              )}
            </div>
            <div className={styles.date}>{experience.date}</div>
          </div>
        </div>

        {experience.content.text && (
          <p className={styles.description}>{experience.content.text}</p>
        )}

        {experience.content.list.length > 0 && (
          <div className={styles.expandableSection}>
            <motion.button
              className={styles.expandButton}
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
            >
              <span>{isExpanded ? 'Show Less' : 'Show Responsibilities'}</span>
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{rotate: isExpanded ? 180 : 0}}
                transition={{duration: 0.3}}
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.button>

            <motion.div
              className={styles.expandableContent}
              variants={contentVariants}
              animate={isExpanded ? 'expanded' : 'collapsed'}
              initial="collapsed"
            >
              <ul className={styles.responsibilities}>
                {experience.content.list.map((item, listIndex) => (
                  <motion.li
                    key={listIndex}
                    className={styles.responsibility}
                    initial={{opacity: 0, x: -20}}
                    animate={
                      isExpanded ? {opacity: 1, x: 0} : {opacity: 0, x: -20}
                    }
                    transition={{
                      duration: 0.3,
                      delay: isExpanded ? listIndex * 0.1 : 0,
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}

        {experience.content.tech.length > 0 && (
          <div className={styles.technologies}>
            <span className={styles.techLabel}>Technologies:</span>
            <div className={styles.techList}>
              {experience.content.tech.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className={styles.techItem}
                  whileHover={{scale: 1.1, y: -2}}
                  transition={{duration: 0.2}}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        )}

        <motion.div
          //className={styles.cardGlow}
          initial={{opacity: 0}}
          whileHover={{opacity: 1}}
          transition={{duration: 0.3}}
        />
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;
