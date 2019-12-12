import React from 'react';
import styles from './styles.module.scss';
import CodeEditor from '../../components/code-editor';
import Console from '../../components/console';
import Nav from '../../components/nav';
import { useParams } from 'react-router-dom';
const code = `
function test(a, b){
  return Math.round((a+b) / 2);
}
`;

const dataset = [3, 6];
const Challenge = () => {
  const { id } = useParams();
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles['col-container']}>
        <div className={styles.column}>
          <CodeEditor id={id} code={code} defaultArgs={dataset} />
        </div>
        <div className={styles.column}>
          <div className={styles.area}>
            <Console title="console output"></Console>
          </div>
          <div className={styles.area}></div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
