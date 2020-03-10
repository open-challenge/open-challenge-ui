import React from 'react';
import styles from './styles.module.scss';

const NavArea = ({ title, subtitle, children }) => {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.title}>
        {title}
        {subtitle && <div className={styles.subtitle}>- {subtitle}</div>}
      </div>
      <div className={styles.menu}>{children}</div>
    </div>
  );
};

export default NavArea;
