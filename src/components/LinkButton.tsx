import {motion} from 'framer-motion';
import React, {FC} from 'react';

import styles from '../styles/components/linkButton.module.scss';

interface LinkButtonProps {
  className?: string;
  style?: React.CSSProperties;
  icon: JSX.Element;
  label: string;
  link: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const LinkButton: FC<LinkButtonProps> = ({
  className,
  style,
  icon,
  label,
  link,
  variant = 'primary',
  size = 'md',
}) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`${styles.linkButton} ${styles[variant]} ${styles[size]} ${className || ''}`}
      style={style}
      whileHover={{scale: 1.05, y: -2}}
      whileTap={{scale: 0.95}}
      transition={{duration: 0.2}}
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </motion.a>
  );
};

export {LinkButton};
export default LinkButton;
