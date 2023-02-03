import React, {FC} from 'react';
import {FaGithub, FaRunning} from 'react-icons/fa';

import styles from '../styles/components/projectCard.module.scss';
import {LinkButton} from './LinkButton';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  gitHub: string;
  hosted: string;
}

const ProjectCard: FC<ProjectCardProps> = (props) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imagewrapper}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={styles.content}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className={styles.buttons}>
          {props.gitHub && (
            <LinkButton
              icon={<FaGithub />}
              label={'GitHub'}
              className={styles.github}
              link={props.gitHub}
            />
          )}
          <LinkButton
            icon={<FaRunning />}
            label={'Live here'}
            className={styles.hosted}
            link={props.hosted}
          />
          {/* <LinkButton isGitHub={false} link={props.hosted} /> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
