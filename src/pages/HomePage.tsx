const Zoom = require('react-reveal/Zoom');

import React from 'react';

import profilePic from '../assets/profile.png';
import {About, Links} from '../data';
import styles from '../styles/pages/home.module.scss';

const welcomeText = `I am, ${About.firstName}  ${About.lastName}`;

const HomePage = () => {
  return (
    <div className={styles.home}>
      <Zoom cascade>
        <img src={profilePic} alt="Profile" className={styles.image} />
        <h2 className={styles.title}>{welcomeText}</h2>
      </Zoom>
      <Zoom cascade>
        <h3 className={styles.about}>{About.about1}</h3>
        <h3 className={styles.about_next}>{About.about2}</h3>
        <div className={styles.links}>
          {Links.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              key={item.title}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </Zoom>
    </div>
  );
};

export default HomePage;
