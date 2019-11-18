import React from 'react';
import styles from './App.module.scss';
import CodeEditor from './components/code-editor';
import Console from './components/console';
import Nav from './components/nav';
let code = `
function asd(a, b){
  return Math.round((a+b) / 2);
}
`;
const output = [
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
  {line: 123,output: 'asdasdasd'},
];
function App() {
  return (
    <div className={styles.container}>
      <Nav/>
      <div className={styles['col-container']}>
        <div className={styles.column}>
          <CodeEditor code={code}></CodeEditor>
        </div>
        <div className={styles.column}>
            <div className={styles.area}>
              <div className={styles['area-title']}>console</div>
              <div className={styles['area-body']}>
                <h1>console 3</h1>
                <Console outputs={output}></Console>
              </div>
            </div>
            <div className={styles.area}>
              <h1>console 3</h1>
              <Console outputs={output}></Console>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
