import React, {useState} from 'react';
import styles from './App.module.scss';
import CodeEditor from './components/code-editor';
import Console from './components/console';

import Nav from './components/nav';
let code = `
function test(a, b){
  return Math.round((a+b) / 2);
}
`;

const dataset = [3,6];
function App() {
  return (
    <div className={styles.container}>
      <Nav/>
      <div className={styles['col-container']}>
        <div className={styles.column}>
          <CodeEditor code={code} defaultArgs={dataset} />
        </div>
        <div className={styles.column}>
            <div className={styles.area}>
              <Console title="console output"></Console>
            </div>
            <div className={styles.area}>
              <Console title="response output"></Console>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
