import React from 'react';
import styles from './styles.module.scss';
import CodeEditor from '../../components/code-editor';
import Console from '../../components/console';
import Nav from '../../components/nav';
import { useParams } from 'react-router-dom';
import { PageContainer } from '../../components/base';
const Challenge = () => {
  const { id } = useParams();
  return (
    <PageContainer>
      <Nav />
      <div className={styles['col-container']}>
        <div className={styles.column}>
          <CodeEditor id={id} />
        </div>
        <div className={styles.column}>
          <div className={styles.area}>
            <Console title="console output"></Console>
          </div>
          <div className={styles.area}></div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Challenge;
