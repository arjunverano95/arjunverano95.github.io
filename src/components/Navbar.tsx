import React, {useState} from 'react';
import {IoClose, IoMenu} from 'react-icons/io5';
import {NavLink} from 'react-router-dom';

import {Contact, NavLinks} from '../data';
import styles from '../styles/components/navbar.module.scss';

const Navbar = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsmenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.navbar}>
        <h2 className={styles.logo}>{'arjun.v()'}</h2>
        <div className={styles.desktopitems}>
          {NavLinks.map((link) => (
            <NavLink
              to={link.linkTo}
              key={link.title}
              className={styles.link}
              style={({isActive}) =>
                isActive
                  ? {
                      background: 'rgb(68 68 68 / 55%)',
                      borderBottom: '3px solid rgba(40, 40, 40, 0.67',
                    }
                  : {color: 'white'}
              }
            >
              {link.title}
            </NavLink>
          ))}
          <a
            target="_blank"
            className={`${styles.btncv} ${styles.link}`}
            href={Contact.cv}
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
        <div className={styles.mobileview}>
          <div
            className={
              isMenuOpen
                ? `${styles.mobilemenu} ${styles.active}`
                : styles.mobilemenu
            }
            onClick={handleMobileMenuToggle}
          >
            <IoMenu size={40} color="#f7f7f7" />
          </div>

          <div
            className={
              !isMenuOpen
                ? `${styles.mobilemenu} ${styles.active}`
                : styles.mobilemenu
            }
            onClick={handleMobileMenuToggle}
          >
            <IoClose size={40} color="#f7f7f7" />
          </div>
        </div>
      </div>
      <div
        className={
          isMenuOpen
            ? `${styles.mobileMenuModal} ${styles.active}`
            : styles.mobileMenuModal
        }
      >
        {NavLinks.map((link) => (
          <NavLink
            to={link.linkTo}
            key={link.title}
            className={styles.mobileLinks}
            onClick={handleMobileMenuToggle}
            style={({isActive}) =>
              isActive
                ? {
                    background: 'rgb(68 68 68 / 55%)',
                    borderBottom: '3px solid rgba(40, 40, 40, 0.67',
                  }
                : {color: 'white'}
            }
          >
            {link.title}
          </NavLink>
        ))}
        <a
          target="_blank"
          className={`${styles.mobileBtncv} ${styles.mobileLinks}`}
          href={Contact.cv}
          rel="noreferrer"
        >
          Download CV
        </a>
      </div>
    </>
  );
};

export default Navbar;
