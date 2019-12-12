import React from 'react';
import styles from './styles.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles['nav-items']}>
        <div className="brand">logo</div>
        <div className="brand">logo2</div>
      </div>
    </nav>
  );
};

export default Nav;
