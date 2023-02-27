import React, {FC} from 'react';
import {FaGlobe} from 'react-icons/fa';
import {MdWork} from 'react-icons/md';

import {ExperienceType} from '../data/Experience';
import styles from '../styles/components/experienceCard.module.scss';
import {LinkButton} from './LinkButton';

interface ExperienceCardProps extends ExperienceType {
  isLeft?: boolean;
}

const ExperienceCard: FC<ExperienceCardProps> = (props) => {
  return (
    <div
      className={`${styles.row} ${props.isLeft ? styles.row_1 : styles.row_2}`}
    >
      <section>
        <MdWork className={styles.icon} />
        <div className={styles.details}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtitle}>{props.subtitle}</p>
          <p className={styles.date}>{props.date}</p>
        </div>
        <p>{props.content.text}</p>
        {props.content.list.length > 0 && (
          <ul>
            {props.content.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <div className={styles.buttons}>
          {props.website && (
            <>
              <LinkButton
                style={{paddingBottom: 1}}
                icon={<FaGlobe style={{marginBottom: -2}} />}
                label={'Visit'}
                className={styles.hosted}
                link={props.website}
              />
            </>
          )}
        </div>
        {props.content.tech.length > 0 && (
          <div className={styles.badges}>
            {props.content.tech.map((item) => (
              <span key={item}>{`${item}`}</span>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ExperienceCard;
