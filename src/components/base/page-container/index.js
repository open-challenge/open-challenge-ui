import React from 'react';
import styles from './styles.module.scss';

const PageContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default PageContainer;
