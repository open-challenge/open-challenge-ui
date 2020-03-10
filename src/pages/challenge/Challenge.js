import React from 'react';
import styles from './styles.module.scss';
import CodeEditor from '../../components/code-editor';
import Console from '../../components/console';
import Nav from '../../components/nav';
import { useParams } from 'react-router-dom';
import { PageContainer } from '../../components/base';
import MarkdownEditor from '../../components/markdown-editor';
const Challenge = () => {
  const { id } = useParams();
  return (
    <PageContainer>
      <Nav />
      <div className={styles['col-container']}>
        <div className={styles.column}>
          <MarkdownEditor />
        </div>
        <div className={styles.column}>
          <CodeEditor id={id} />
        </div>
        <div className={styles.column}>
          <Console title="console output"></Console>
        </div>
      </div>
    </PageContainer>
  );
};

export default Challenge;
